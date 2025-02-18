package com.teja.budget_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teja.budget_service.model.BudgetModel;
import com.teja.budget_service.model.PageableBudgets;
import com.teja.budget_service.service.BudgetService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/budgets")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @PostMapping
    public BudgetModel createBudget(@RequestBody @Valid BudgetModel budgetModel) {
        return budgetService.createBudget(budgetModel);
    }

    @GetMapping
    public PageableBudgets getBudgets(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return budgetService.getBudgets(page, size);
    }
}
