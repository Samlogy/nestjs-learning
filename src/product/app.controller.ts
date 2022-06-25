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
import { IProduct } from '../data/product';
import { AppService } from './app.service';

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
  createProduct(@Body() body: IProduct): IProduct {
    return this.appService.createProduct(body);
  }

  @Put(':id')
  updateProduct(@Body() body: IProduct, @Param('id') id: string): IProduct {
    return this.appService.updateProduct(body, id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): string {
    return this.appService.deleteProduct(id);
  }
}
