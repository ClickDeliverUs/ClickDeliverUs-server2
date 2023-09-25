import { Injectable, Logger } from '@nestjs/common';
import { OrderReqDto } from './dto/order_req.dto';
import { OrderEntity } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';

@Injectable()
export class PaymentService {
  private logger: Logger = new Logger(PaymentService.name);

  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: OrderRepository,
  ) {}

  async saveOrder(orderReqDto: OrderReqDto): Promise<OrderEntity> {
    try {
      // OrderReqDto에서 order엔티티로 매핑
      const order = this.mapDtoToEntity(orderReqDto);

      //주문 정보를 데이터베이스에 저장
      const savedOrder = await this.orderRepository.save(order);
      return savedOrder;
    } catch (error) {
      throw new Error(`Failed to save order: ${error.message}`);
    }
  }

  private mapDtoToEntity(orderReqDto: OrderReqDto): OrderEntity {
    const order = new OrderEntity();
    order.order_id = orderReqDto.order_id;
    order.receipt_id = orderReqDto.receipt_id;
    order.uuid_order = orderReqDto.uuid_order;
    order.uuid_rider = orderReqDto.uuid_rider;
    order.s_id = orderReqDto.s_id;
    order.price = orderReqDto.price;
    order.cancelled_price = orderReqDto.cancelled_price;
    order.order_name = orderReqDto.order_name;
    order.company_name = orderReqDto.company_name;
    order.metadata = orderReqDto.metadata;
    order.pg = orderReqDto.pg;
    order.method_symbol = orderReqDto.method_symbol;
    order.method_origin_symbol = orderReqDto.method_origin_symbol;
    order.purchased_at = orderReqDto.purchased_at;
    order.requested_at = orderReqDto.requested_at;
    order.status_locale = orderReqDto.status_locale;
    order.reciept_url = orderReqDto.receipt_url;
    order.status = orderReqDto.status;
    order.card_data = orderReqDto.card_data;

    return order;
  }
}
