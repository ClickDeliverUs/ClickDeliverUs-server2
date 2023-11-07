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
    delivery.status = 0;
    return this.deliveryRepository.save(delivery);
  }

  async updateDeliveryStatus(orderId: string, newStatus: number): Promise<DeliveryEntity> {
    const delivery = await this.deliveryRepository.findOne({
      where: { orderId },
    });
    if (!delivery) {
      // 에러 처리
    }
    delivery.status = newStatus;
    return this.deliveryRepository.save(delivery);
  }

  async assignDelivery(orderId: string): Promise<DeliveryEntity> {
    // Assigned(1)
    return this.updateDeliveryStatus(orderId, 1);
  }

  async pickupDelivery(orderId: string): Promise<DeliveryEntity> {
    // pickup(2)
    return this.updateDeliveryStatus(orderId, 2);
  }

  async completeDelivery(orderId: string): Promise<DeliveryEntity> {
    // Completed(3)
    return this.updateDeliveryStatus(orderId, 3);
  }

  async findAllDeliveries(): Promise<DeliveryEntity[]> {
    return this.deliveryRepository
      .createQueryBuilder('delivery')
      .innerJoin('delivery.order', 'order')
      .innerJoin('order.user', 'user')
      .where('delivery.status = 0')
      .addSelect(['order.s_id','order.price', 'user.address'])
      .getMany();
  } 
}
