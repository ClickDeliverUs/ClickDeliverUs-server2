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

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([UserEntity, Store, ProductEntity, UserToken, OrderEntity]),
    ProductsModule,
    StoreModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
