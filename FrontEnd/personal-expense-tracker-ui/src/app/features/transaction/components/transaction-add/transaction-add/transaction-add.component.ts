import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-transaction-add',
  imports: [ReactiveFormsModule,MatDatepickerModule,MatFormFieldModule,MatIconModule,MatInputModule],
  providers:[provideNativeDateAdapter()],
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.scss'
})
export class TransactionAddComponent {
  transactionGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder,private matDialog:MatDialogRef<TransactionAddComponent>){
    this.transactionGroup = formBuilder.group({
      "amount": new FormControl(0,[Validators.required]),
      "userId": new FormControl(),
      "category": new FormControl(null,[Validators.required]),
      "type": new FormControl(null,[Validators.required]),
      "date": new FormControl(null,[Validators.required]),
      "description": new FormControl()
    });
  }

  createTransaction(){
    this.matDialog.close({transaction: this.transactionGroup.value});
  }

  onCancel(){
    this.matDialog.close()
  }
}
