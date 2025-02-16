package com.teja.transaction_service.service;

import com.teja.transaction_service.model.PageableTransactions;
import com.teja.transaction_service.model.TransactionModel;

public interface TransactionService {
    public TransactionModel createTransaction(TransactionModel transaction);
    public PageableTransactions getAllTransactions(int page, int size);
    public TransactionModel updateTransaction(TransactionModel transaction);
    public void deleteTransaction(String transactionId);
}
