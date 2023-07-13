import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './gscu/product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/search')
  searchProducts(@Query('keyword') keyword: string): Product[] {
    return this.productsService.searchProducts(keyword);
  }
}
