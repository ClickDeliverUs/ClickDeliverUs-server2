import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entity/auth.entity';
import { UserToken } from 'src/auth/entity/token.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity, UserToken],
};

export default TypeOrmConfig;
