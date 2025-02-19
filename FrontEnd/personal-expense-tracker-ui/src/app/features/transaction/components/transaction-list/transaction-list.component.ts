import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  transactions: any;
  pageSize = 10;
  pageIndex = 0;
  totalElements = 0;
  totalPages = 0;

  constructor(private transactionService: TransactionService) {
    this.transactionService.getTransactions().subscribe((pageableTransactions) => {
      this.transactions = pageableTransactions.transactions;
      this.totalElements = pageableTransactions.totalElements;
      this.totalPages = pageableTransactions.totalPages;
    });
  }

  deleteTransaction(transactionId: string){
    console.log(transactionId);
  }

  editTransaction(transactionId: string){
    console.log(transactionId);
  }

  createTransaction(){
    console.log("createTransaction");
  }

  onPageChange(pageIndex: number){
    this.pageIndex = pageIndex;
    // this.transactionService.getTransactions(this.pageIndex, this.pageSize).subscribe((pageableTransactions) => {
    //   this.transactions = pageableTransactions.transactions;
    // });
  }
}
