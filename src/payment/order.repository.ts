import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository extends Repository<OrderEntity> {
  // Logic
}
