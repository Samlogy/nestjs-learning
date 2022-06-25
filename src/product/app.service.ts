import { Injectable } from '@nestjs/common';
import { products } from 'src/data/product';
import { ProductResponseDto } from 'src/dto/product.dto';

interface IPostProduct {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}
interface IUpdateProduct {
  name?: string;
  price?: number;
  description?: string;
  imgUrl?: string;
}

@Injectable()
export class ProductService {
  getAllProducts(): ProductResponseDto[] {
    // business logic here
    return products;
  }
  getOneProduct(id: string): ProductResponseDto {
    // business logic here
    return products.find((el) => el.id === id);
  }
  createProduct(body: IPostProduct): ProductResponseDto {
    // business logic here
    return {
      id: 'uuid',
      ...body,
      createdAt: new Date(),
      editedAt: null,
    };
  }
  updateProduct(body: IUpdateProduct, id: string): ProductResponseDto {
    // business logic here
    const product = products.find((el) => el.id === id);
    return {
      ...product,
      editedAt: new Date(),
    };
  }
  deleteProduct(id: string): string {
    // business logic here
    return id;
  }
}
