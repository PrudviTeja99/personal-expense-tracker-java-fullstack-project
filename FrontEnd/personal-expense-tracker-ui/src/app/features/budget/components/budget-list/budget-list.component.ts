import { Component, Inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BudgetAddComponent } from '../budget-add/budget-add/budget-add.component';

@Component({
  selector: 'app-budget-list',
  imports: [HttpClientModule],
  providers: [BudgetService],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent {
  totalPages:number=0;
  totalElements:number=0;
  budgetItems:any[]=[];

  constructor(private budgetService:BudgetService,private matDialog:MatDialog){
  }

  ngOnInit(){
    this.fetchBudgets();
  }

  fetchBudgets(){
    this.budgetService.getBudgets().subscribe({
      next: (data)=>{
        this.budgetItems = data.budgets;
      }
    });
    console.log(this.budgetItems);
  }

  createBudget(){
    this.matDialog.open(BudgetAddComponent,{
      width: '40em',
      height: '40em'
    });
  }

  deleteBudget(budgetId: string){
    this.budgetService.deleteBudget(budgetId).subscribe({
      next: ()=>{
        console.log("Successfully deleted")
      },
      error: ()=>{
        console.log("Unable to delete")
      }
    });
  }
}
