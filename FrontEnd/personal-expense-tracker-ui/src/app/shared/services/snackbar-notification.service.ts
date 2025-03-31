import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarNotificationService {

  constructor(private matSnackBar: MatSnackBar) { }

  openMatSnackBar(message:string){
    this.matSnackBar.open(message,'OK', {duration: 3000});
  }
}
