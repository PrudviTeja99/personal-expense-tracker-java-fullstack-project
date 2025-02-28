import { Component, Inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BudgetAddComponent } from '../budget-add/budget-add/budget-add.component';
import { budget } from '../../model/budget.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-list',
  imports: [HttpClientModule, CommonModule],
  providers: [BudgetService],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent {
  pageIndex: number = 0;
  pageSize: number = 10;

  totalPages: number = 0;
  totalElements: number = 0;
  budgets: budget[] = [];

  constructor(private budgetService: BudgetService, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchBudgets();
  }

  fetchBudgets() {
    this.budgetService.getBudgets(this.pageIndex,this.pageSize).subscribe({
      next: (data) => {
        this.budgets = data.budgets;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      }
    });
  }

  createBudget() {
    const budgetAddComponentRef= this.matDialog.open(BudgetAddComponent, {
      width: '40em',
      maxWidth: '100%',
      height: '40em'
    });

    budgetAddComponentRef.afterClosed().subscribe({
      next: (data)=>{
        if(data!=undefined){
          this.budgetService.createBudget(data.budget).subscribe({
            next: ()=>{
              console.log("Budget got created successfully !!");
            },
            error: ()=>{
              console.error("Unable to create budget !!");
            }
          });
        }
      }
    });
  }

  deleteBudget(budgetId: string,budgetIndex:number) {
    this.budgetService.deleteBudget(budgetId).subscribe({
      next: () => {
        console.log("Successfully deleted");
        this.budgets.splice(budgetIndex,1);
      },
      error: () => {
        console.log("Unable to delete")
      }
    });
  }

  onPageChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.budgetService.getBudgets(pageIndex,this.pageSize).subscribe({});
  }

}
