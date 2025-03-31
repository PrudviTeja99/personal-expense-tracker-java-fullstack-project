import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";
import { SnackbarNotificationService } from "../../../shared/services/snackbar-notification.service";

export const apiStatusInterceptor: HttpInterceptorFn = (req,next)=>{
    const snackBarService = inject(SnackbarNotificationService);
    return next(req).pipe(
        tap({
            next: (data)=>{
                console.log("API call successful !!");
            },
            error: (error)=>{
                snackBarService.openMatSnackBar("Api Call Failed !!");
                console.log("API call failed !!");
            }
        }),
        catchError((error:HttpErrorResponse)=>{
            console.log("API call failed error !!");
            return throwError(()=>error);
        })
    );
}