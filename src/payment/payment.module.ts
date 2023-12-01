import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [PaymentService, OrderRepository, EventEmitter2],
  controllers: [PaymentController],
})
export class PaymentModule {}
