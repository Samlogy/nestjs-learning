import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from 'src/product/product.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
/*
@Module({
  imports: [productModule, AuthModule, PrismaModule], // add all modules
  controllers: [ProductController], // add all controllers
  providers: [ProductService], // add all services
})
export class AppModule {} */

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    ProductModule,
    PrismaModule,
  ],
})
export class AppModule {}
