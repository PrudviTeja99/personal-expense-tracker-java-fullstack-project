package com.teja.transaction_service.entity;

import java.time.LocalDateTime;

import com.teja.transaction_service.model.TransactionType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transaction")
public class TransactionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String transactionId;
    @Column(nullable = false)
    private Double amount;
    @Column(nullable = true)
    private String category;
    @Column(nullable = false)
    private TransactionType type;
    @Column(nullable = false)
    private LocalDateTime date;
    @Column(nullable = true)
    private String description;
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
    @Override
    public String toString() {
        return "TransactionEntity [transactionId=" + transactionId + ", amount=" + amount + ", category=" + category
                + ", type=" + type + ", date=" + date + ", description=" + description + "]";
    }

    
}
