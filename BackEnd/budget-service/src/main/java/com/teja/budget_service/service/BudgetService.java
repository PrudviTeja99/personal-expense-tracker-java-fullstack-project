package com.teja.budget_service.service;

import com.teja.budget_service.model.BudgetModel;
import com.teja.budget_service.model.PageableBudgets;

public interface BudgetService {

    BudgetModel createBudget(BudgetModel budgetModel);

    PageableBudgets getBudgets(int page, int size);

    BudgetModel updateBudget(String budgetId, BudgetModel budgetModel);

    void deleteBudget(String budgetId);

}
