import { Injectable } from '@nestjs/common';
import ProductDto from '../entities/dto/product.dto.ts/product.dto';

@Injectable()
export class ProductService {
  public findAllProducts(): Array<ProductDto> {
    const products = new Array<ProductDto>();
    products.push(new ProductDto(1, 'computador'));
    return products;
  }
}
