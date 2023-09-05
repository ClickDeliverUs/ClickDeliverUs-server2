/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { Store } from 'src/product/gscu/store.entity';
import { Alcohol } from 'src/product/gscu/Alcohol.entity';
import { Candy } from 'src/product/gscu/Candy.entity';
import { Ice } from 'src/product/gscu/Ice.entity';
import { Instant } from 'src/product/gscu/Instant.entity';
import { Lifeuse } from 'src/product/gscu/Lifeuse.entity';
import { Medic } from 'src/product/gscu/Medic.entity';
import { Milk } from 'src/product/gscu/Milk.entity';
import { Noodle } from 'src/product/gscu/Noodle.entity';
import { Onedate } from 'src/product/gscu/Onedate.entity';
import { Snack } from 'src/product/gscu/Snack.entity';
import { Beverage } from 'src/product/gscu/Beverage.entity';
import { Frozen } from 'src/product/gscu/Frozen.entity';
import { Tobacco } from 'src/product/gscu/Tobacco.entity

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
  ],
};

export default TypeOrmConfig;
