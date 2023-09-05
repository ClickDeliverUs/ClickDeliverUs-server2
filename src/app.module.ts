import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';
import { UserEntity } from './auth/auth.entity';
import { ProductsModule } from './product/products.module';
import { Store } from './product/gscu/store.entity';
import { Alcohol } from './product/gscu/Alcohol.entity';
import { Beverage } from './product/gscu/Beverage.entity';
import { Candy } from './product/gscu/Candy.entity';
import { Frozen } from './product/gscu/Frozen.entity';
import { Ice } from './product/gscu/Ice.entity';
import { StoreModule } from './stores/store.module';
import { Instant } from './product/gscu/Instant.entity';
import { Lifeuse } from './product/gscu/Lifeuse.entity';
import { Medic } from './product/gscu/Medic.entity';
import { Milk } from './product/gscu/Milk.entity';
import { Noodle } from './product/gscu/Noodle.entity';
import { Onedate } from './product/gscu/Onedate.entity';
import { Snack } from './product/gscu/Snack.entity';
import { Tobacco } from './product/gscu/Tobacco.entity';
import { Goods } from './product/gscu/goods';

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
