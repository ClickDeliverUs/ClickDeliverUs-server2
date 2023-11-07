import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { DeliveryDto } from './dto/delivery.dto';
import { DeliveryEntity } from './delivery.entity';
import { DeliveryService } from './delivery.service';

@Controller('delivery')
export class DeliveryController {
  private logger: Logger = new Logger(DeliveryController.name);
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  async createDelivery(@Body() deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    return this.deliveryService.createDelivery(deliveryDto);
  }

  @Post()
  async updateDeliveryProgress(@Body() deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    switch (deliveryDto.status) {
      case 0:
        return this.deliveryService.assignDelivery(deliveryDto.orderId);
        break;
      case 1:
        return this.deliveryService.pickupDelivery(deliveryDto.orderId);
        break;
      case 2:
        return this.deliveryService.completeDelivery(deliveryDto.orderId);
        break;
      default:
        this.logger.log('An Error ocurred while updating delivery status(Controller)');
        break;
    }
  }

  @Get()
  findAll(): Promise<DeliveryEntity[]> {
    return this.deliveryService.findAllDeliveries();
  }
}
