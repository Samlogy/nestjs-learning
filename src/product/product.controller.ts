import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createProductDto, updateProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { IProduct } from 'src/data/product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Promise<IProduct[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: number): Promise<IProduct> {
    return this.productService.getOneProduct(id);
  }

  //@HttpCode(201)
  @Post()
  createProduct(@Body() body: createProductDto): Promise<IProduct> {
    return this.productService.createProduct(body);
  }

  @Put(':id')
  updateProduct(
    @Body() body: updateProductDto,
    @Param('id') id: number,
  ): Promise<IProduct> {
    return this.productService.updateProduct(body, id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<IProduct> {
    return this.productService.deleteProduct(id);
  }
}
