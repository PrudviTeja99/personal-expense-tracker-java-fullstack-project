package com.teja.budget_service.model;

import java.util.List;

public class PageableBudgets {
    private List<BudgetModel> budgets;
    private int totalPages;
    private long totalElements;

    public PageableBudgets(List<BudgetModel> budgets, int totalPages, long totalElements) {
        this.budgets = budgets;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }

    public List<BudgetModel> getBudgets() {
        return budgets;
    }

    public void setBudgets(List<BudgetModel> budgets) {
        this.budgets = budgets;
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
        return "PageableBudgets [budgets=" + budgets + ", totalPages=" + totalPages + ", totalElements=" + totalElements
                + "]";
    }
    
}
