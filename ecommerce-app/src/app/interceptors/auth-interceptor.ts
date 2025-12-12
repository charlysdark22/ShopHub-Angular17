import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const notifier = inject(NotificationService);
  const modified = req.clone({ setHeaders: { 'X-ShopHub-Client': 'ShopHub-Angular' } });
  return next(modified).pipe(
    catchError((err) => {
      const msg = err?.message || 'Error en la petición HTTP';
      notifier.showError(msg);
      return throwError(() => err);
    })
  );
};

