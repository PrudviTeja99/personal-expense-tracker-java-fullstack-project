import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TransactionAddComponent } from '../transaction-add/transaction-add/transaction-add.component';
import { transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [TransactionService],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  pageSize = 10;
  pageIndex = 0;

  totalElements = 0;
  totalPages = 0;
  transactions: transaction[]=[];

  constructor(private transactionService: TransactionService,private matDialog:MatDialog) {}

  ngOnInit(){
    this.fetchTransactions(this.pageIndex,this.pageSize);
  }

  deleteTransaction(transactionId: string,elementIndex:number){
    // console.log(transactionId);
    this.transactionService.deleteTransaction(transactionId).subscribe({
      next: (data) => {
        console.log("Successfully Deleted ");
        this.fetchTransactions(this.pageIndex,this.pageSize);
      },
      error: (error)=> console.error("Unable to del")
    })
  }

  fetchTransactions(pageIndex:number,pageSize:number){
    this.transactionService.getTransactions(pageIndex,pageSize).subscribe((pageableTransactions) => {
      this.transactions = pageableTransactions.transactions;
      this.totalElements = pageableTransactions.totalElements;
      this.totalPages = pageableTransactions.totalPages;
    });
  }

  createTransaction(){
    const dialogRef = this.matDialog.open(TransactionAddComponent,
      {
        width: '40em',
        maxWidth: '100%',
        height: '40em',
      }
    );

    dialogRef.afterClosed().subscribe({
      next: (data)=>{
        if(data!=undefined){
          this.transactionService.createTransaction(data.transaction).subscribe({
            next: (data)=>{
              console.log("Successfully Created !!");
              this.transactionService.getTransactions(this.pageIndex,this.pageSize).subscribe({});
            },
            error: (error)=>{
              console.error("Unable to create transaction !!");
            }
          });
        }
      }
    })
  }

  onPageChange(pageIndex: number){
    this.pageIndex = pageIndex;
    this.fetchTransactions(pageIndex,this.pageSize);
  }
}
