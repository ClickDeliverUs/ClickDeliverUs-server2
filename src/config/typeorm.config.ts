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
