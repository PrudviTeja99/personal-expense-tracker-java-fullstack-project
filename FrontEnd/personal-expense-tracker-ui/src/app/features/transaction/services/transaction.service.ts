import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { transaction } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(page:number,size:number) {
    return this.http.get<any>(environment.transactionServiceURL,{params:{"page":page,"size":size}});
  }
 
  createTransaction(transaction: transaction) {
    transaction.userId='testuser';
    return this.http.post<any>(environment.transactionServiceURL, transaction);
  }

  updateTransaction(transaction: any) {
    return this.http.put<any>(environment.transactionServiceURL, transaction);
  }

  deleteTransaction(id: any) {
    return this.http.delete<any>(`${environment.transactionServiceURL}/${id}`);
  }
}
