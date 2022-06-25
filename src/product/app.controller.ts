import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IProduct } from 'src/data/product';
import {
  createProductDto,
  updateProductDto,
  ProductResponseDto,
} from 'src/dto/product.dto';
import { AppService } from './app.service';

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}
  //proudct/uuid1
  @Get()
  getAllProducts(): ProductResponseDto[] {
    return this.appService.getAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): ProductResponseDto {
    return this.appService.getOneProduct(id);
  }

  //@HttpCode(201)
  @Post()
  createProduct(@Body() body: createProductDto): ProductResponseDto {
    return this.appService.createProduct(body);
  }

  @Put(':id')
  updateProduct(
    @Body() body: updateProductDto,
    @Param('id') id: string,
  ): ProductResponseDto {
    return this.appService.updateProduct(body, id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): string {
    return this.appService.deleteProduct(id);
  }
}
