package com.teja.transaction_service.model;

import java.time.LocalDateTime;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotNull;

public class TransactionModel {
    @Nullable
    private String transactionId;
    @NotNull
    private String userId;
    @NotNull
    private Double amount;
    @NotNull
    private String category;
    @NotNull
    private TransactionType type;
    @NotNull
    private LocalDateTime date;
    @Nullable
    private String description;

    // Default constructor
    public TransactionModel() {
    }

    // Getters and Setters
    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "TransactionModel [transactionId=" + transactionId + ", userId=" + userId + ", amount=" + amount
                + ", category=" + category + ", type=" + type + ", date=" + date + ", description=" + description + "]";
    }
}
