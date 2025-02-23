package com.teja.budget_service.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.teja.budget_service.entity.BudgetEntity;
import com.teja.budget_service.model.BudgetModel;
import com.teja.budget_service.model.PageableBudgets;
import com.teja.budget_service.repository.BudgetRepository;
import com.teja.budget_service.service.BudgetService;

@Service
public class BudgetServiceImpl implements BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    @Override
    public BudgetModel createBudget(BudgetModel budgetModel) {
        try {
            BudgetEntity budgetEntity = new BudgetEntity();
            BeanUtils.copyProperties(budgetModel, budgetEntity);
            budgetEntity = budgetRepository.save(budgetEntity);
            budgetModel.setBudgetId(budgetEntity.getBudgetId());
            return budgetModel;
        } catch (Exception e) {
            throw new RuntimeException("Unable to create budget", e);
        }
    }

    @Override
    public PageableBudgets getBudgets(int page, int size) {
        try {
            Page<BudgetEntity> pageableBudgetsFromDatabase = budgetRepository.findAll(Pageable.ofSize(size).withPage(page));
            List<BudgetModel> budgetModels = pageableBudgetsFromDatabase.getContent().stream().map(budgetEntity->{
                BudgetModel budgetModel = new BudgetModel();
                BeanUtils.copyProperties(budgetEntity, budgetModel);
                return budgetModel;
            }).toList();
            return new PageableBudgets(budgetModels, pageableBudgetsFromDatabase.getTotalPages(), pageableBudgetsFromDatabase.getTotalElements());
        } catch (Exception e) {
            throw new RuntimeException("Unable to get budgets", e);
        }
    }

    @Override
    public BudgetModel updateBudget(String budgetId, BudgetModel budgetModel) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateBudget'");
    }

    @Override
    public void deleteBudget(String budgetId) {
        try{
            if(!budgetRepository.existsById(budgetId)){
                throw new RuntimeException("Unable to find budget with id: "+budgetId);
            }
            budgetRepository.deleteById(budgetId);
        }
        catch (Exception exception){
            throw new RuntimeException("Unable to delete budget");
        }
    }

}
