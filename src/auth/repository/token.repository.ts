import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { uuidToBin } from '../../util/uuid.util';
import { UserToken } from '../entity/token.entity';

@Injectable()
export class TokenRepository extends Repository<UserToken> {
  private logger: Logger = new Logger(TokenRepository.name);

  constructor(private datasource: DataSource) {
    super(UserToken, datasource.createEntityManager());
  }

  async saveRefreshToken(uuid: string, id: string, refreshToken: string): Promise<void> {
    const uuidBinary: Buffer = uuidToBin(uuid);

    try {
      await this.save({ uuid: uuidBinary, refreshToken });

      this.logger.log(`RefreshToken succcessfully saved: ${id}`);
    } catch (err) {
      console.log(err);
      this.logger.log(`'DB Error ocurred(RefreshToken saving process)' : ${id}`);
      throw new InternalServerErrorException('DB Error ocurred');
    }
  }

  async findRefreshToken(uuid: string, refreshToken: string): Promise<UserToken> {
    // Todo: exception handling
    const uuidBinary: Buffer = uuidToBin(uuid);

    const getRefreshToken: UserToken = await this.findOneBy({ uuid: uuidBinary, refreshToken });

    return getRefreshToken;
  }
}
