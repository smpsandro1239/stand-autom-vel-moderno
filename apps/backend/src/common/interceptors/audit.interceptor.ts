import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StructuredLogger } from '../logger/logger.service';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private logger = new StructuredLogger();

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, user } = request;

    return next.handle().pipe(
      tap((data) => {
        this.logger.log({
          type: 'AUDIT',
          method,
          url,
          userId: user?.id || 'anonymous',
          payload: body,
          response: 'SUCCESS',
          timestamp: new Date().toISOString(),
        });
      }),
    );
  }
}
