package com.teja.budget_service.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "budget")
public class BudgetEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String budgetId;
    
    @Column(nullable = false)
    private String userId;
    
    @Column(nullable = false)
    private String category;
    
    @Column(name = "limit_amount", nullable = false)
    private Long limitAmount;
    
    @Column(name = "current_spent")
    private Long currentSpent;
    
    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;
    
    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;

    // Default constructor
    public BudgetEntity() {}

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
        return "BudgetEntity [budgetId=" + budgetId + ", userId=" + userId + ", category=" + category + ", limitAmount="
                + limitAmount + ", currentSpent=" + currentSpent + ", startDate=" + startDate + ", endDate=" + endDate
                + "]";
    }

} 