import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from './auth.entity';
import { DataSource, Repository } from 'typeorm';
import { SignUpResDto } from './dto/signup-res.dto';
import { uuidToBin } from '../util/uuid.util';

@Injectable()
// Entity 연결
export class MemberCRUD extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async saveUser(signUpDto: SignUpResDto): Promise<SignUpResDto> {
    const { uuid, name, id, password, age, gender, address, isAdult } = signUpDto;

    const UuidToBin: Buffer = uuidToBin(uuid);

    try {
      const result: UserEntity = await this.create({
        uuid: UuidToBin,
        name,
        id,
        password,
        age,
        gender,
        address,
        createdDT: new Date(),
        isAdult,
      }).save();

      const signUpResDto: SignUpResDto = new SignUpResDto(
        result.uid,
        uuid,
        result.name,
        result.id,
        result.password,
        result.age,
        result.gender,
        result.address,
        result.createdDT,
        result.isAdult,
      );

      return signUpResDto;
    } catch (err) {
      if (err.code == 'ER_DUP_ENTRY') {
        return null;
      } else {
        throw new InternalServerErrorException('DB error ocurred');
      }
    }
  }
}
