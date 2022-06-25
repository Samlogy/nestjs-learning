import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { IProduct } from 'src/data/product';
import { PrismaService } from '../prisma/prisma.service';

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
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<IProduct[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }
  async getOneProduct(id: number): Promise<IProduct> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  }
  async createProduct(body: IPostProduct): Promise<IProduct> {
    try {
      const newProduct = await this.prisma.product.create({
        data: { ...body },
      });

      return newProduct;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
  async updateProduct(body: IUpdateProduct, id: number): Promise<IProduct> {
    try {
      const updatedProduct = await this.prisma.product.update({
        where: {
          id,
        },
        data: {
          ...body,
        },
      });
      return {
        ...updatedProduct,
        editedAt: new Date(),
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
  async deleteProduct(id: number): Promise<IProduct> {
    try {
      const deletedProduct = await this.prisma.product.delete({
        where: {
          id,
        },
      });
      return deletedProduct;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
