/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Alcohol } from 'src/product/gscu/alcohol.entity';
import { Beverage } from 'src/product/gscu/beverage.entity';
import { Candy } from 'src/product/gscu/candy.entity';
import { Frozen } from 'src/product/gscu/frozen.entity';
import { Ice } from 'src/product/gscu/ice.entity';
import { Instant } from 'src/product/gscu/instant.entity';
import { Lifeuse } from 'src/product/gscu/lifeuse.entity';
import { Medic } from 'src/product/gscu/medic.entity';
import { Milk } from 'src/product/gscu/milk.entity';
import { Noodle } from 'src/product/gscu/noodle.entity';
import { Onedate } from 'src/product/gscu/onedate.entity';
import { Snack } from 'src/product/gscu/snack.entity';
import { Tobacco } from 'src/product/gscu/tobacco.entity';
import { Goods } from 'src/product/gscu/goods';

@Module({
  imports: [
    TypeOrmModule.forFeature([
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
