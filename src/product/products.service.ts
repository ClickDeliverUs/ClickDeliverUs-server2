import { Injectable } from '@nestjs/common';
import { Product } from './gscu/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    new Product('1', '라면1'),
    new Product('2', '라면2'),
    new Product('3', '라면3'),
    new Product('4', '축구.리버풀'),
    new Product('5', '축구.첼시;'),
    new Product('6', '축구.아스날'),
    new Product('7', '리버풀.각포'),
    new Product('8', '리버풀.케이타'),
    new Product('9', '리버풀.누녜스'),
    new Product('10', '첼시.루카쿠'),
    new Product('11', '첼시.하베르츠'),
    new Product('12', '첼시.마운트'),
    new Product('13', '아스날.제주스'),
    new Product('14', '아스날.반페르시'),
    new Product('15', '아스날.외데고르'),
  ];

  searchProducts(keyword: string): Product[] {
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.name.includes(keyword)) {
        results.push(product);
      }
    }
    return results;
  }
}
