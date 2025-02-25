import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  getBudgets() {
    return this.http.get<any>(environment.budgetServiceURL);
  }

  createBudget(budget: any) {
    return this.http.post<any>(environment.budgetServiceURL, budget);
  }

  updateBudget(budget: any) {
    return this.http.put<any>(environment.budgetServiceURL, budget);
  }

  deleteBudget(id: any) {
    return this.http.delete<any>(`${environment.budgetServiceURL}/${id}`);
  }
}
