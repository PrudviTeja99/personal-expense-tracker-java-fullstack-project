import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, switchMap, tap, throwError } from "rxjs";
import { SnackbarNotificationService } from "../../../shared/services/snackbar-notification.service";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

export const apiStatusInterceptor: HttpInterceptorFn = (req,next)=>{
    const snackBarService = inject(SnackbarNotificationService);
    const authService = inject(AuthService);
    const router = inject(Router);
    return next(req).pipe(
        catchError((error:HttpErrorResponse)=>{
            console.log("API call failed error !!");

            if(error.status == 401){
                console.error("Refreshing token !!");
                return authService.refreshToken().pipe(
                    switchMap(()=>next(req)),
                    catchError((error:HttpErrorResponse)=>{
                        authService.clearUserCreds();
                        router.navigate(['/auth']);
                        return throwError(()=>error);
                    })
                );
            }

            return throwError(()=>error);
        })
    );
}