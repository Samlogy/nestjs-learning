import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  createProductDto,
  ProductResponseDto,
  updateProductDto,
} from 'src/dto/product.dto';
import { ProductService } from './app.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  //proudct/uuid1
  @Get()
  getAllProducts(): ProductResponseDto[] {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): ProductResponseDto {
    return this.productService.getOneProduct(id);
  }

  //@HttpCode(201)
  @Post()
  createProduct(@Body() body: createProductDto): ProductResponseDto {
    return this.productService.createProduct(body);
  }

  @Put(':id')
  updateProduct(
    @Body() body: updateProductDto,
    @Param('id') id: string,
  ): ProductResponseDto {
    return this.productService.updateProduct(body, id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): string {
    return this.productService.deleteProduct(id);
  }
}
