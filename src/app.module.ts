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
import { Store } from 'src/product/gscu/Store.entity';
import { Alcohol } from 'src/product/gscu/Alcohol.entity';
import { Beverage } from 'src/product/gscu/Beverage.entity';
import { Candy } from 'src/product/gscu/Candy.entity';
import { Frozen } from 'src/product/gscu/Frozen.entity';
import { Ice } from 'src/product/gscu/Ice.entity';
import { StoreModule } from 'src/stores/store.module';
import { Instant } from 'src/product/gscu/Instant.entity';
import { Lifeuse } from 'src/product/gscu/Lifeuse.entity';
import { Medic } from 'src/product/gscu/Medic.entity';
import { Milk } from 'src/product/gscu/Milk.entity';
import { Noodle } from 'src/product/gscu/Noodle.entity';
import { Onedate } from 'src/product/gscu/Onedate.entity';
import { Snack } from 'src/product/gscu/Snack.entity';
import { Tobacco } from 'src/product/gscu/Tobacco.entity';
import { Goods } from 'src/product/gscu/Goods';


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
