import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: "127.0.0.1",
  username: "root",
  password: "1234",
  database: "test1",
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity],
};

export default TypeOrmConfig;
