import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeliveryDto } from './dto/delivery.dto';
import { DeliveryEntity } from './delivery.entity';
import { DeliveryService } from './delivery.service';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  async create(@Body() deliveryDto: DeliveryDto): Promise<DeliveryEntity> {
    return this.deliveryService.createDelivery(deliveryDto);
  }

  @Get()
  findAll(): Promise<DeliveryEntity[]> {
    return this.deliveryService.findAllDeliveries();
  }
}
