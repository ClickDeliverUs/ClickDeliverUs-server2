import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('search/:s_id')
  async searchBySid(@Param('s_id') s_id: string) {
    return this.productsService.findBySidAcrossTables(s_id);
  }
}

