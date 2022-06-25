import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProductController } from 'src/product/app.controller';
import { ProductService } from 'src/product/app.service';
import { productModule } from 'src/product/app.module';

@Module({
  imports: [productModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
