import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryEntity } from './delivery.entity';
import { Repository } from 'typeorm';
import { DeliveryDto } from './dto/delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliveryEntity)
    private readonly deliveryRepository: Repository<DeliveryEntity>,
  ) {}

  async createDelivery(deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    const { orderId, deliveryPersonId } = deliveryDto;
    const delivery = new DeliveryEntity();
    delivery.orderId = orderId;
    delivery.deliveryPersonId = deliveryPersonId;
    // may have to set other fields as we progress
    return this.deliveryRepository.save(delivery);
  }

  async findAllDeliveries(): Promise<DeliveryEntity[]> {
    return this.deliveryRepository.find();
  }
}
