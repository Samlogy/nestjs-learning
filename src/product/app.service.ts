import { Injectable } from '@nestjs/common';
import { IProduct, products } from 'src/data/product';
import { createProductDto, updateProductDto } from 'src/dto/product.dto';
interface IResponseSuccess {
  success: boolean;
  data: any;
}

@Injectable()
export class AppService {
  getAllProducts(): IProduct[] {
    // business logic here
    return products;
  }
  getOneProduct(id: string): IProduct {
    // business logic here
    return products.find((el) => el.id === id);
  }
  createProduct(body: createProductDto): IProduct {
    // business logic here
    return {
      id: 'uuid',
      ...body,
      createdAt: new Date(),
      editedAt: null,
    };
  }
  updateProduct(body: updateProductDto, id: string): IProduct {
    // business logic here
    return {
      id: 'uuid',
      ...body,
      createdAt: new Date(),
      editedAt: new Date(),
    };
  }
  deleteProduct(id: string): string {
    // business logic here
    return id;
  }
}
