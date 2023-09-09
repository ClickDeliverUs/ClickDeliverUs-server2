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
    order.orderId = orderReqDto.orderId;
    order.event = orderReqDto.event;
    order.recieptId = orderReqDto.recieptId;
    order.price = orderReqDto.price;
    order.taxFree = orderReqDto.taxFree;
    order.cancelledPrice = orderReqDto.cancelledPrice;
    order.cancelledTaxFree = orderReqDto.cancelledTaxFree;
    order.orderName = orderReqDto.orderName;
    order.companyName = orderReqDto.companyName;
    order.gatewayUrl = orderReqDto.gatewayUrl;
    order.metadata = orderReqDto.metadata;
    order.sandBox = orderReqDto.sandBox;
    order.pg = orderReqDto.pg;
    order.method = orderReqDto.method;
    order.methodSymbol = orderReqDto.methodSymbol;
    order.methodOrigin = orderReqDto.methodOrigin;
    order.methodOriginSymbol = orderReqDto.methodOriginSymbol;
    order.purchasedAt = orderReqDto.purchasedAt;
    order.requestedAt = orderReqDto.requestedAt;
    order.statusLocale = orderReqDto.statusLocale;
    order.currency = orderReqDto.currency;
    order.recieptUrl = orderReqDto.recieptUrl;
    order.status = orderReqDto.status;
    order.cardData = orderReqDto.cardData;

    return order;
  }
}
