import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventEmitterProvider } from './event-emitter.provider';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), EventEmitter2],
  providers: [PaymentService, OrderRepository, EventEmitter2],
  controllers: [PaymentController],
  exports: [PaymentService, EventEmitterProvider],
})
export class PaymentModule {}
