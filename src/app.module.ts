import { Module } from '@nestjs/common';
import { ProductController } from './resources/product.controller';
import { ProductService } from './domain/services/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
