/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Store } from 'src/product/gscu/Store.entity';
import { Alcohol } from 'src/product/gscu/Alcohol.entity';
import { Beverage } from 'src/product/gscu/Beverage.entity';
import { Candy } from 'src/product/gscu/Candy.entity';
import { Frozen } from 'src/product/gscu/Frozen.entity';
import { Ice } from 'src/product/gscu/Ice.entity';
import { Instant } from 'src/product/gscu/Instant.entity';
import { Lifeuse } from 'src/product/gscu/Lifeuse.entity';
import { Medic } from 'src/product/gscu/Medic.entity';
import { Milk } from 'src/product/gscu/Milk.entity';
import { Noodle } from 'src/product/gscu/Noodle.entity';
import { Onedate } from 'src/product/gscu/Onedate.entity';
import { Snack } from 'src/product/gscu/Snack.entity';
import { Tobacco } from 'src/product/gscu/Tobacco.entity';
import { Goods } from 'src/product/gscu/goods

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
