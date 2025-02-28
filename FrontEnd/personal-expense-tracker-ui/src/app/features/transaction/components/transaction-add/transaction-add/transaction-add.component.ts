import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-transaction-add',
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.scss'
})
export class TransactionAddComponent {
  transactionGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private matDialog: MatDialogRef<TransactionAddComponent>) {
    this.transactionGroup = formBuilder.group({
      "amount": new FormControl(null, [Validators.required]),
      "category": new FormControl(null, [Validators.required]),
      "type": new FormControl(null, [Validators.required]),
      "date": new FormControl(null, [Validators.required]),
      "description": new FormControl('')
    });
  }

  createTransaction() {
    if (this.transactionGroup.valid) {
      this.matDialog.close({ transaction: this.transactionGroup.value });
    }
    else {
      this.transactionGroup.touched;
    }
  }

  onCancel() {
    this.matDialog.close()
  }
}
