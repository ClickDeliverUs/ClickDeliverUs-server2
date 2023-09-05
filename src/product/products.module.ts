/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Store } from './gscu/Store.entity';
import { Alcohol } from './gscu/Alcohol.entity';
import { Beverage } from './gscu/Beverage.entity';
import { Candy } from './gscu/Candy.entity';
import { Frozen } from './gscu/Frozen.entity';
import { Ice } from './gscu/Ice.entity';
import { Instant } from './gscu/Instant.entity';
import { Lifeuse } from './gscu/Lifeuse.entity';
import { Medic } from './gscu/Medic.entity';
import { Milk } from './gscu/Milk.entity';
import { Noodle } from './gscu/Noodle.entity';
import { Onedate } from './gscu/Onedate.entity';
import { Snack } from './gscu/Snack.entity';
import { Tobacco } from './gscu/Tobacco.entity';
import { Goods } from './gscu/goods';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Store,
      Alcohol,
      Beverage,
      Frozen,
      Candy,
      Goods,
      Ice,
      Instant,
      Lifeuse,
      Medic,
      Milk,
      Noodle,
      Onedate,
      Snack,
      Tobacco,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
