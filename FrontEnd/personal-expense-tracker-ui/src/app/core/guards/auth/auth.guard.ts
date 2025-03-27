import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { from, map, catchError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return from(authService.validateToken()).pipe(
    map((isValid: boolean) => {
      if (!isValid) {
        return router.createUrlTree(['/auth']);
      }
      return true;
    }),
    catchError(() => {
      return from(Promise.resolve(router.createUrlTree(['/auth'])));
    })
  );
};
