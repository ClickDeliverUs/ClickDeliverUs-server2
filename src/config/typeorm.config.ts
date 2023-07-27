import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { Store } from '../product/gscu/store.entity'
//import { Alcohol } from '../product/gscu/Alcohol.entity';
import { Candy } from '../product/gscu/candy.entity';
import { Ice } from '../product/gscu/ice.entity';
import { Instant } from '../product/gscu/instant.entity';
//import { Lifeuse } from '../product/gscu/life_use.entity';
import { Medic } from '../product/gscu/medic.entity';
//import { Milk } from '../product/gscu/milk.entity';
import { Noodle } from '../product/gscu/noodle.entity';
//import { Onedate } from '../product/gscu/one_date.entity';
import { Snack } from '../product/gscu/snack.entity';
import { Beverage } from 'src/product/gscu/beverage.entity';
import { Frozen } from 'src/product/gscu/frozen.entity';
//import { Tobacco } from '../product/gscu/tobacco.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: "cdudb.ct531rub2hhf.ap-northeast-2.rds.amazonaws.com",
  username: "admin",
  password: "1q2w3e4r!",
  database: "cdudb",
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity, Store,
                Beverage, Frozen,
                 Candy,  Ice, Instant, /*Lifeuse*/, Medic, 
                 //Milk, 
                 Noodle, 
                 //Onedate, 
                 Snack, 
                 //Tobacco
                ],
};

export default TypeOrmConfig;


