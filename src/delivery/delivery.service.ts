import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryEntity } from './delivery.entity';
import { Repository } from 'typeorm';
import { DeliveryDto } from './dto/delivery.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from 'src/auth/auth.entity';
import { PaymentService } from 'src/payment/payment.service';
import { OrderEntity } from 'src/payment/order.entity';

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

  private listenToPaymentEvents() {
    this.paymentService.eventEmitter.on('order.completed', async (order: OrderEntity) => {
      await this.handleOrder(order);
    });
  }

  private handleOrder(order: OrderEntity) {
    const { address, requests, parcels, purchaseId } = this.extractOrderData(order);
    await this.createDelivery(address, requests, parcels, purchaseId);
  }

  private extractOrderData(order: OrderEntity) {
    const { address, requests, parcels, purchaseId } = order;
    return { address, requests, parcels, purchaseId };
  }

  async createDelivery(deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    const { orderId } = deliveryDto;

    const deliveryPersonId = await this.authService.getDeliveryPersonIdByUuid(
      deliveryDto.deliveryPersonId,
    );

    const delivery = new DeliveryEntity();
    delivery.orderId = orderId;
    delivery.deliveryPersonId = deliveryPersonId;
    delivery.status = 0;

    return this.deliveryRepository.save(delivery);
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

  async assignDelivery(orderId: string): Promise<DeliveryEntity> {
    //실제 사용자 UUID를 어떻게 할지 더 고민해야함
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
    return (
      this.deliveryRepository
        .createQueryBuilder('delivery')
        // .innerJoin('delivery.order', 'order')
        // .innerJoin('order.user', 'user')
        // .where('delivery.status = 0')
        // .addSelect(['order.s_id', 'order.price', 'user.address'])
        .getMany()
    );
  }
}
