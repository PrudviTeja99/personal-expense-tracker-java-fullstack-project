import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-add',
  imports: [ReactiveFormsModule],
  templateUrl: './budget-add.component.html',
  styleUrl: './budget-add.component.scss'
})
export class BudgetAddComponent {

  formgroup!: FormGroup;

  constructor(private formBuilder:FormBuilder,private matDialog:MatDialogRef<BudgetAddComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    this.formgroup = formBuilder.group({
      category: new FormControl(''),
      limitAmount: new FormControl(0),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  }

  createBudget(){

  }

  onCancel(){
    this.matDialog.close();
  }
}
