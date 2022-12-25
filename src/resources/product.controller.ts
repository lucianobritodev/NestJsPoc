import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../domain/services/product.service';
import ProductDto from '../domain/entities/dto/product.dto.ts/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Array<ProductDto> {
    return this.productService.findAllProducts();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Post()
  // create(@Body() createCatDto: CreateDto) {
  //   return 'This action adds a new cat';
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
