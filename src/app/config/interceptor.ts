import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize, delay } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { LoaderService } from 'src/shared/loader/loader.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(public loadService: LoaderService){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadService.show();
    return next
      .handle(req)
      .pipe(
        delay(500),
//        retry(2),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        }),
        finalize(() => this.loadService.hide())
      );
  }
}
