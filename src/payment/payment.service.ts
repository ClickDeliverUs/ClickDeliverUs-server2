import { Injectable, Logger } from '@nestjs/common';
import { OrderInfoDto } from './dto/order_info.dto';
import { OrderEntity } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';
import { EventEmitterProvider } from './event-emitter.provider';

@Injectable()
export class PaymentService {
  private logger: Logger = new Logger(PaymentService.name);

  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: OrderRepository,
  ) {}

  async saveOrder(orderInfoDto: OrderInfoDto): Promise<OrderEntity> {
    try {
      const order = this.mapDtoToEntity(orderInfoDto);

      // Save order info to DB
      const savedOrder = await this.orderRepository.save(order);

      // Event after saving order info to DB
      EventEmitterProvider.getInstance().eventEmitter.emit('order.completed', savedOrder);

      return savedOrder;
    } catch (error) {
      this.logger.log(`Error in PaymentServicce.saveOrder: ${error}`);
      throw new Error(`Failed to save order: ${error.message}`);
    }
  }

  async fetchOrder(order: OrderEntity): Promise<OrderInfoDto | null> {
    try {
      const savedOrder = this.mapEntityToDto(order);
      return savedOrder;
    } catch (error) {
      this.logger.log(`Error in PaymentService.fetchOrder: ${error}`);
      throw new Error(`Failed to retrieve order: ${error.message}`);
    }
  }

  private mapDtoToEntity(orderInfoDto: OrderInfoDto): OrderEntity {
    const order = new OrderEntity();
    order.id = orderInfoDto.id;
    order.address = orderInfoDto.address;
    order.requests = orderInfoDto.requests;
    order.parcels = orderInfoDto.parcels;
    order.order_id = orderInfoDto.order_id;
    order.receipt_id = orderInfoDto.receipt_id;
    order.s_id = orderInfoDto.s_id;
    order.price = orderInfoDto.price;
    order.cancelled_price = orderInfoDto.cancelled_price;
    order.order_name = orderInfoDto.order_name;
    order.company_name = orderInfoDto.company_name;
    order.metadata = orderInfoDto.metadata;
    order.pg = orderInfoDto.pg;
    order.method_symbol = orderInfoDto.method_symbol;
    order.method_origin_symbol = orderInfoDto.method_origin_symbol;
    order.purchased_at = orderInfoDto.purchased_at;
    order.requested_at = orderInfoDto.requested_at;
    order.status_locale = orderInfoDto.status_locale;
    order.reciept_url = orderInfoDto.receipt_url;
    order.status = orderInfoDto.status;
    order.card_data = orderInfoDto.card_data;
    order.csv_name = orderInfoDto.csv_name;

    switch (orderInfoDto.s_id) {
      case 1:
        order.csv_name = 'CU';
        break;
      case 2:
        order.csv_name = 'GS25';
        break;
      case 3:
        order.csv_name = '세븐일레븐';
        break;
    }
    return order;
  }

  private mapEntityToDto(order: OrderEntity): OrderInfoDto {
    const orderInfoDto = new OrderInfoDto(
      order.id,
      order.address,
      order.requests,
      order.parcels,
      order.order_id,
      order.receipt_id,
      order.s_id,
      order.price,
      order.cancelled_price,
      order.order_name,
      order.company_name,
      order.metadata,
      order.pg,
      order.method_symbol,
      order.method_origin_symbol,
      order.purchased_at,
      order.requested_at,
      order.status_locale,
      order.reciept_url,
      order.status,
      order.card_data,
      order.csv_name,
    );
    return orderInfoDto;
  }
}
