package com.teja.budget_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teja.budget_service.entity.BudgetEntity;

public interface BudgetRepository extends JpaRepository<BudgetEntity, String> {

}
