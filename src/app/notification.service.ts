import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {

  }

  notify(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
