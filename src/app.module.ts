import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';
import { UserEntity } from './auth/auth.entity';
import { ProductsModule } from 'src/product/products.module';
import { Store } from 'src/product/gscu/store.entity';
import { Alcohol } from 'src/product/gscu/alcohol.entity';
import { Beverage } from 'src/product/gscu/beverage.entity';
import { Candy } from 'src/product/gscu/candy.entity';
import { Frozen } from 'src/product/gscu/frozen.entity';
import { Ice } from 'src/product/gscu/ice.entity';
import { StoreModule } from 'src/stores/store.module';
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
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([
      UserEntity,
      Alcohol,
      Store,
      Beverage,
      Frozen,
      Candy,
      Ice,
      Goods,
      Instant,
      Lifeuse,
      Medic,
      Milk,
      Noodle,
      Onedate,
      Snack,
      Tobacco,
    ]),
    ProductsModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
