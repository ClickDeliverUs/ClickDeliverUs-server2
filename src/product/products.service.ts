/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findBySidAcrossTables(s_id: number): Promise<ProductEntity[]>{
     return await this.productRepository.find({where: {sId: s_id}}) as ProductEntity[];
  }
}
