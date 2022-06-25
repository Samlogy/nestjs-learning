import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
//import { CustomInterceptor } from 'src/custom.interceptor';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
      // useClass: CustomInterceptor,
    },
  ],
})
export class ProductModule {}
