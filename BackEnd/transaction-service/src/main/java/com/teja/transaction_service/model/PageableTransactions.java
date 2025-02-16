package com.teja.transaction_service.model;

import java.util.List;

public class PageableTransactions {
    private List<TransactionModel> transactions;
    private int totalPages;
    private long totalElements;

    public PageableTransactions(List<TransactionModel> transactions, int totalPages, long totalElements) {
        this.transactions = transactions;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }


    public List<TransactionModel> getTransactions() {
        return transactions;
    }



    public void setTransactions(List<TransactionModel> transactions) {
        this.transactions = transactions;
    }



    public int getTotalPages() {
        return totalPages;
    }



    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }



    public long getTotalElements() {
        return totalElements;
    }



    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    @Override
    public String toString() {
        return "PageableTransactions [transactions=" + transactions + ", totalPages=" + totalPages + ", totalElements="
                + totalElements + "]";
    }
    
}
