import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryEntity } from './delivery.entity';
import { Repository } from 'typeorm';
import { DeliveryDto } from './dto/delivery.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from 'src/auth/auth.entity';
<<<<<<< HEAD
import { OrderDto } from 'src/payment/dto/order.dto';
=======
import { PaymentService } from 'src/payment/payment.service';
import { OrderEntity } from 'src/payment/order.entity';
import { EventEmitterProvider } from 'src/payment/event-emitter.provider';
>>>>>>> 22489a5c599fa04b277cfeb4fbbcb326e6d57e0f

@Injectable()
export class DeliveryService {
  constructor(
    private readonly paymentService: PaymentService,
    @InjectRepository(DeliveryEntity)
    private readonly deliveryRepository: Repository<DeliveryEntity>,
    private readonly authService: AuthService,
    private readonly userEntity: UserEntity,
  ) {
    this.listenToPaymentEvents();
  }

<<<<<<< HEAD
  async createDelivery(deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    const { orderId } = deliveryDto;
=======
  private listenToPaymentEvents() {
    EventEmitterProvider.getInstance().eventEmitter.on(
      'order.completed',
      async (order: OrderEntity) => {
        await this.handleOrder(order);
      },
    );
  }
>>>>>>> 22489a5c599fa04b277cfeb4fbbcb326e6d57e0f

  private async handleOrder(order: OrderEntity) {
    const deliveryDto = this.extractOrderData(order);
    await this.createDelivery(deliveryDto);
  }

  private extractOrderData(order: OrderEntity): DeliveryDto {
    const { id, address, requests, parcels, order_id: orderId } = order;
    return { id, address, requests, parcels, orderId, status: 0 };
  }

  async createDelivery(data: Partial<DeliveryDto>): Promise<DeliveryEntity> {
    const { orderId } = data;

    const existingDelivery = await this.deliveryRepository.findOne({ where: { orderId } });

    if (existingDelivery) {
      // If it already exists, update
      Object.assign(existingDelivery, data);
      return this.deliveryRepository.save(existingDelivery);
    } else {
      // If it doen not exists, create
      const delivery = new DeliveryEntity();
      Object.assign(delivery, data);
    }
    /*
    const deliveryPersonId = await this.authService.getDeliveryPersonIdByUuid(
      deliveryDto.deliveryPersonId,
    );

    const delivery = new DeliveryEntity();
    delivery.orderId = orderId;
    delivery.deliveryPersonId = deliveryPersonId;
    delivery.status = 0;

    return this.deliveryRepository.save(delivery);
    */
  }

  async updateDeliveryStatus(
    orderId: string,
    newStatus: number,
    deliveryPersonId: string,
  ): Promise<DeliveryEntity> {
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
<<<<<<< HEAD
    return this.deliveryRepository
      .createQueryBuilder('delivery')
      .innerJoinAndSelect('delivery.order', 'order')
      .where('delivery.status = 0')
      .select(['delivery', 'order.order_id', 'order.s_id', 'order.price','order.order_name'])
      .getMany();
=======
    return (
      this.deliveryRepository
        .createQueryBuilder('delivery')
        // .innerJoin('delivery.order', 'order')
        // .innerJoin('order.user', 'user')
        // .where('delivery.status = 0')
        // .addSelect(['order.s_id', 'order.price', 'user.address'])
        .getMany()
    );
>>>>>>> 22489a5c599fa04b277cfeb4fbbcb326e6d57e0f
  }
  
}
