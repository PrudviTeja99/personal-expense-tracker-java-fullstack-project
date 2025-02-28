import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { budget } from '../model/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  getBudgets(page:number,size:number) {
    return this.http.get<any>(environment.budgetServiceURL);
  }

  createBudget(budget: budget) {
    budget.userId = "testUser";
    return this.http.post<any>(environment.budgetServiceURL, budget);
  }

  updateBudget(budget: any) {
    return this.http.put<any>(environment.budgetServiceURL, budget);
  }

  deleteBudget(id: any) {
    return this.http.delete<any>(`${environment.budgetServiceURL}/${id}`);
  }
}
