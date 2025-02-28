import { Component, Inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BudgetAddComponent } from '../budget-add/budget-add/budget-add.component';
import { budget } from '../../model/budget.model';

@Component({
  selector: 'app-budget-list',
  imports: [HttpClientModule],
  providers: [BudgetService],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent {
  pageIndex:number = 0;
  pageSize:number = 10;

  totalPages:number=0;
  totalElements:number=0;
  budgetItems:budget[]=[];

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
      maxWidth: '100%',
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

  onPageChange(pageIndex:number){
    this.pageIndex = pageIndex;
  }

}
