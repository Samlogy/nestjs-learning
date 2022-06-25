import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('intercepting request');
    //console.log(context);
    return handler.handle().pipe(
      map((data) => {
        const response = data;
        delete response.editedAt;

        console.log('intercepting response');
        console.log(response);
        return response;
      }),
    );
  }
}
