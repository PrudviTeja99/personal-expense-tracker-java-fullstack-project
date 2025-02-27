package com.teja.budget_service.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class BudgetModel {
    private String budgetId;
    private String userId;
    private String category;
    private Long limitAmount;
    private Long currentSpent;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    // Default constructor
    public BudgetModel() {}

    // Constructor with all fields
    public BudgetModel(String budgetId, String userId, String category, 
                     Long limitAmount, Long currentSpent,
                     LocalDateTime startDate, LocalDateTime endDate) {
        this.budgetId = budgetId;
        this.userId = userId;
        this.category = category;   
        this.limitAmount = limitAmount;
        this.currentSpent = currentSpent;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Getters and Setters
    public String getBudgetId() {
        return budgetId;
    }

    public void setBudgetId(String budgetId) {
        this.budgetId = budgetId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getLimitAmount() {
        return limitAmount;
    }

    public void setLimitAmount(Long limitAmount) {
        this.limitAmount = limitAmount;
    }

    public Long getCurrentSpent() {
        return currentSpent;
    }

    public void setCurrentSpent(Long currentSpent) {
        this.currentSpent = currentSpent;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "BudgetModel [budgetId=" + budgetId + ", userId=" + userId + ", category=" + category + ", limitAmount="
                + limitAmount + ", currentSpent=" + currentSpent + ", startDate=" + startDate + ", endDate=" + endDate
                + "]";
    }
} 