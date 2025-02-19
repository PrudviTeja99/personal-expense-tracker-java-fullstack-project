import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<any>('http://localhost:8080/transactions');
  }
 
  createTransaction(transaction: any) {
    return this.http.post<any>('http://localhost:8080/transactions', transaction);
  }

  updateTransaction(transaction: any) {
    return this.http.put<any>('http://localhost:8080/transactions', transaction);
  }

  deleteTransaction(id: any) {
    return this.http.delete<any>(`http://localhost:8080/transactions/${id}`);
  }
}
