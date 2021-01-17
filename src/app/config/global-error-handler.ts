import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {

        const notifier = this.injector.get(NotificationService);

        if (error instanceof HttpErrorResponse) {
          // Server Error
          if (error.status === 401 && error.url.includes('login')) {
            notifier.showError('Usuário ou senha inválidos');
          } else if (error.status === 401) {
            notifier.showError('Sessão expirada');
          } else {
            notifier.showError(error.message);
          }
        } else {
            // Client Error
            console.log('Erros do Angular');
            //notifier.showError(error.message);
        }

        console.error(error);
    }
}
