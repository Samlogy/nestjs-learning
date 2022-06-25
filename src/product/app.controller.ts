import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IProduct } from 'src/data/product';
import { AppService } from './app.service';
import { createProductDto, updateProductDto } from 'src/dto/product.dto';

interface IResponseSuccess {
  success: boolean;
  data: any;
}

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}
  //proudct/uuid1
  @Get()
  getAllProducts(): IProduct[] {
    return this.appService.getAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): IProduct {
    return this.appService.getOneProduct(id);
  }

  //@HttpCode(201)
  @Post()
  createProduct(@Body() body: createProductDto): IProduct {
    return this.appService.createProduct(body);
  }

  @Put(':id')
  updateProduct(
    @Body() body: updateProductDto,
    @Param('id') id: string,
  ): IProduct {
    return this.appService.updateProduct(body, id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): IResponseSuccess {
    return this.appService.deleteProduct(id);
  }
}
