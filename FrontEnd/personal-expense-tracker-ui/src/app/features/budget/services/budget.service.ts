import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  getBudgets() {
    return this.http.get<any>(environment.budgetServiceUrl);
  }

  createBudget(budget: any) {
    return this.http.post<any>('http://localhost:3000/budgets', budget);
  }

  updateBudget(budget: any) {
    return this.http.put<any>('http://localhost:3000/budgets', budget);
  }

  deleteBudget(id: any) {
    return this.http.delete<any>(`${environment.budgetServiceUrl}/${id}`);
  }
}
