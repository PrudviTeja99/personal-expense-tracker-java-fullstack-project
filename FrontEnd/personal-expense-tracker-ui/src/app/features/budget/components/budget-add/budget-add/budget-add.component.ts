import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-budget-add',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatDatepickerModule],
  providers:[provideNativeDateAdapter()],
  templateUrl: './budget-add.component.html',
  styleUrl: './budget-add.component.scss'
})
export class BudgetAddComponent {

  budgetGroup!: FormGroup;

  constructor(private formBuilder:FormBuilder,private matDialog:MatDialogRef<BudgetAddComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    this.budgetGroup = formBuilder.group({
      category: new FormControl(null),
      limitAmount: new FormControl(0),
      startDate: new FormControl(null),
      endDate: new FormControl(null)
    });
  }

  createBudget(){

  }

  onCancel(){
    this.matDialog.close();
  }
}
