import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryEntity } from './delivery.entity';
import { Repository } from 'typeorm';
import { DeliveryDto } from './dto/delivery.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from 'src/auth/auth.entity';
import { OrderDto } from 'src/payment/dto/order.dto';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliveryEntity)
    private readonly deliveryRepository: Repository<DeliveryEntity>,
    private readonly authService: AuthService,
    private readonly userEntity: UserEntity
    ) {}

  async createDelivery(deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    const { orderId } = deliveryDto;

    const deliveryPersonId = await this.authService.getDeliveryPersonIdByUuid(deliveryDto.deliveryPersonId);

    const delivery = new DeliveryEntity();
    delivery.orderId = orderId;
    delivery.deliveryPersonId = deliveryPersonId;
    delivery.status = 0;

    return this.deliveryRepository.save(delivery);
  }

  async updateDeliveryStatus(orderId: string, newStatus: number, deliveryPersonId: string): Promise<DeliveryEntity> {
    const delivery = await this.deliveryRepository.findOne({
      where: { orderId },
    });

    if (!delivery) {
      // 에러 처리
    }

    delivery.deliveryPersonId = deliveryPersonId;
    delivery.status = newStatus;
    return this.deliveryRepository.save(delivery);
  }

  async assignDelivery(orderId: string,): Promise<DeliveryEntity> {
  
    const userUuid = this.userEntity.uuid.toString('utf-8');
    const deliveryPersonId = await this.authService.getDeliveryPersonIdByUuid(userUuid);
    // Assigned(1)
    return this.updateDeliveryStatus(orderId, 1, deliveryPersonId);
  }

  async pickupDelivery(orderId: string): Promise<DeliveryEntity> {
    // pickup(2)
    return this.updateDeliveryStatus(orderId, 2, null);
  }

  async completeDelivery(orderId: string): Promise<DeliveryEntity> {
    // Completed(3)
    return this.updateDeliveryStatus(orderId, 3, null);
  }

  async findAllDeliveries(): Promise<DeliveryEntity[]> {
    return this.deliveryRepository
      .createQueryBuilder('delivery')
      .innerJoinAndSelect('delivery.order', 'order')
      .where('delivery.status = 0')
      .select(['delivery', 'order.order_id', 'order.s_id', 'order.price','order.order_name'])
      .getMany();
  }
  
}
