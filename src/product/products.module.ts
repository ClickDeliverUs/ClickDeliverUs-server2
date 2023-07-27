import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Store } from './gscu/store.entity';
//import { Alcohol } from './gscu/Alcohol.entity';
import { Beverage } from './gscu/beverage.entity';
import { Candy } from './gscu/candy.entity';
import { Frozen } from './gscu/frozen.entity';
import { Ice } from './gscu/ice.entity';
import { Instant } from './gscu/instant.entity';
//import { Lifeuse } from './gscu/life_use.entity';
import { Medic } from './gscu/medic.entity';
//import { Milk } from './gscu/milk.entity';
import { Noodle } from './gscu/noodle.entity';
//import { Onedate } from './gscu/one_date.entity';
import { Snack } from './gscu/snack.entity';
//import { Tobacco } from './gscu/tobacco.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Store, Beverage,Frozen,
       Candy,  Ice, 
       Instant,
       /* Lifeuse*/
      Medic, 
      //Milk, 
      Noodle, 
      //Onedate,
      Snack, 
     //Tobacco
])],
    controllers: [ProductsController],
    providers: [ProductsService],
  })
  export class ProductsModule {}