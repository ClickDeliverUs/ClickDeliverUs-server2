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
import { Store } from 'src/product/entity/store.entity';
import { ProductEntity } from 'src/product/entity/product.entity';
import { PaymentModule } from './payment/payment.module';
import { StoreModule } from './stores/store.module';
import { OrderEntity } from './payment/order.entity';
import { UserToken } from './auth/entity/token.entity';
import { PassportModule } from '@nestjs/passport';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryEntity } from './delivery/delivery.entity';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([
      UserEntity,
      Store,
      ProductEntity,
      UserToken,
      OrderEntity,
      DeliveryEntity,
    ]),
    ProductsModule,
    StoreModule,
    PaymentModule,
    DeliveryModule,
    PassportModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
