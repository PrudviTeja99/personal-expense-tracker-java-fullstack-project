import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<any>(environment.transactionServiceURL);
  }
 
  createTransaction(transaction: any) {
    return this.http.post<any>(environment.transactionServiceURL, transaction);
  }

  updateTransaction(transaction: any) {
    return this.http.put<any>(environment.transactionServiceURL, transaction);
  }

  deleteTransaction(id: any) {
    return this.http.delete<any>(`${environment.transactionServiceURL}/${id}`);
  }
}
