package com.teja.budget_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.teja.budget_service.model.BudgetModel;
import com.teja.budget_service.model.PageableBudgets;
import com.teja.budget_service.service.BudgetService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/budgets")
@CrossOrigin(origins = "${origins.allowed}")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @PostMapping
    public BudgetModel createBudget(@RequestBody @Valid BudgetModel budgetModel) {
        return budgetService.createBudget(budgetModel);
    }

    @GetMapping
    public ResponseEntity<PageableBudgets> getBudgets(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(budgetService.getBudgets(page, size));
    }

    @DeleteMapping("/{budgetId}")
    public ResponseEntity<Void> deleteBudgetById(@PathVariable(name = "budgetId") String budgetId){
        budgetService.deleteBudget(budgetId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
