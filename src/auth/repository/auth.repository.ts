import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from '../auth.entity';
import { DataSource, Repository } from 'typeorm';
import { SignInResDto } from '../dto/signin-res.dto';
import { uuidToBin, binToUuid } from '../../util/uuid.util';
import { SignUpReqDto } from '../dto/signup-req.dto';
import { FindOneOptions } from 'typeorm';

@Injectable()
// Entity 연결
export class AuthRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async saveUser(signUpReqDto: SignUpReqDto): Promise<boolean> {
    const { uuid, name, nickName, id, password, tel, birth, gender, address, isAdult, age } =
      signUpReqDto;

    const UuidToBin: Buffer = uuidToBin(uuid);
    try {
      const user: UserEntity = this.create({
        name,
        nickName,
        id,
        password,
        tel,
        birth: new Date(birth),
        address,
        age,
        gender,
        isAdult,
        uuid: UuidToBin,
        createdDT: new Date(),
      });

      await this.save(user);

      return true;
    } catch (err) {
      if (err.code == 'ER_DUP_ENTRY') {
        return null;
      } else {
        console.log(err);
        throw new InternalServerErrorException('DB error ocurred');
      }
    }
  }

  async findUser(id: string): Promise<SignInResDto> {
    try {
      const user: UserEntity = await this.findOneBy({ id });

      if (!user) {
        return null;
      }

      const uuidOrigin: string = binToUuid(user.uuid);

      const signInResDto: SignInResDto = new SignInResDto(
        uuidOrigin,
        user.id,
        user.password,
        user.address,
        user.name,
        user.nickName,
        user.tel,
        user.age,
        user.isAdult,
        user.createdDT as Date,
        user.gender,
      );

      return signInResDto;
    } catch (err) {
      console.log('DB error ocurred(User finding process): ${id}');
      throw new InternalServerErrorException('DB error ocurred');
    }
  }
  async findUserById(id: string): Promise<UserEntity> {
    const options: FindOneOptions<UserEntity> = { where: { id } };
    return this.findOne(options);
  }
}
