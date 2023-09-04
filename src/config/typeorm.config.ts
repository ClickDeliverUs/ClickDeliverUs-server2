import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../auth/auth.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { Store } from '../product/gscu/store.entity'
import { Alcohol } from '../product/gscu/Alcohol.entity';
import { Candy } from '../product/gscu/Candy.entity';
import { Ice } from '../product/gscu/Ice.entity';
import { Instant } from '../product/gscu/Instant.entity';
import { Lifeuse } from '../product/gscu/Lifeuse.entity';
import { Medic } from '../product/gscu/Medic.entity';
import { Milk } from '../product/gscu/Milk.entity';
import { Noodle } from '../product/gscu/Noodle.entity';
import { Onedate } from '../product/gscu/Onedate.entity';
import { Snack } from '../product/gscu/Snack.entity';
import { Beverage } from 'src/product/gscu/Beverage.entity';
import { Frozen } from 'src/product/gscu/Frozen.entity';
import { Tobacco } from '../product/gscu/Tobacco.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: "cdudb.ct531rub2hhf.ap-northeast-2.rds.amazonaws.com",
  username: "admin",
  password: "1q2w3e4r!",
  database: "cdudb",
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [UserEntity, Store,
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
                Tobacco
                ],
};

export default TypeOrmConfig;


