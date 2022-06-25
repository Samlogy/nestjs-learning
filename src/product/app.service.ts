import { Injectable } from '@nestjs/common';
import { IProduct, products } from '../data/product';

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
  createProduct(body: IProduct): IProduct {
    // business logic here
    return body;
  }
  updateProduct(body: IProduct, id: string): IProduct {
    // business logic here
    return body;
  }
  deleteProduct(id: string): string {
    // business logic here
    return id;
  }
}
