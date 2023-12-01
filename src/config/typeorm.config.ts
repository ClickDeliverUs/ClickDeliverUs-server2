/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { Store } from 'src/product/entity/store.entity';
import { UserToken } from 'src/auth/entity/token.entity';
import { OrderEntity } from 'src/payment/order.entity';
import { ProductEntity } from 'src/product/entity/product.entity';
import { DeliveryEntity } from 'src/delivery/delivery.entity';

const isLocal = true;

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: isLocal ? process.env.DB_HOST_DEV : process.env.DB_HOST,
  username: isLocal ? process.env.DB_USERNAME_DEV : process.env.DB_USERNAME,
  password: isLocal ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD,
  database: isLocal ? process.env.DB_DATABASE_DEV : process.env.DB_DATABASE,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity, Store, UserToken, ProductEntity, OrderEntity, DeliveryEntity],
};

export default TypeOrmConfig;
