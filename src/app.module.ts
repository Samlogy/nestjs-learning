import { Module } from '@nestjs/common';
import { ProductController } from 'src/product/product.controller';
import { productModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [productModule], // add all modules
  controllers: [ProductController], // add all controllers
  providers: [ProductService], // add all services
})
export class AppModule {}
