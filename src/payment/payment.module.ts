import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [PaymentService, OrderRepository],
  controllers: [PaymentController],
})
export class PaymentModule {}
