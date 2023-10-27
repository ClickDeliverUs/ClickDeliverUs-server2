/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { Store } from 'src/product/gscu/store.entity';
import { Alcohol } from 'src/product/gscu/alcohol.entity';
import { Candy } from 'src/product/gscu/candy.entity';
import { Ice } from 'src/product/gscu/ice.entity';
import { Instant } from 'src/product/gscu/instant.entity';
import { Lifeuse } from 'src/product/gscu/lifeuse.entity';
import { Medic } from 'src/product/gscu/medic.entity';
import { Milk } from 'src/product/gscu/milk.entity';
import { Noodle } from 'src/product/gscu/noodle.entity';
import { Onedate } from 'src/product/gscu/onedate.entity';
import { Snack } from 'src/product/gscu/snack.entity';
import { Beverage } from 'src/product/gscu/beverage.entity';
import { Frozen } from 'src/product/gscu/frozen.entity';
import { Tobacco } from 'src/product/gscu/tobacco.entity';
import { UserToken } from 'src/auth/entity/token.entity';
import { OrderEntity } from 'src/payment/order.entity';
import { Goods } from 'src/product/gscu/goods';


const isLocal = false;

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: isLocal ? process.env.DB_HOST_DEV : process.env.DB_HOST,
  username:isLocal ? process.env.DB_USERNAME_DEV : process.env.DB_USERNAME,
  password:isLocal ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD,
  database:isLocal ? process.env.DB_DATABASE_DEV : process.env.DB_DATABASE,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    UserEntity, 
    Store,
    Alcohol,
    Beverage,
    Frozen,
    Candy,
    Ice,
    Instant,
    Lifeuse,
    Medic,
    Milk,
    Noodle,
    Onedate,
    Snack,
    Tobacco,
    UserToken,
    Goods,
    OrderEntity
  ],
};

export default TypeOrmConfig;
