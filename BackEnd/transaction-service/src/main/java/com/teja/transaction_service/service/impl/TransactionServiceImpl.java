package com.teja.transaction_service.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.teja.transaction_service.service.TransactionKafkaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.teja.transaction_service.entity.TransactionEntity;
import com.teja.transaction_service.model.PageableTransactions;
import com.teja.transaction_service.model.TransactionModel;
import com.teja.transaction_service.repository.TransactionRepository;
import com.teja.transaction_service.service.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService{

    private static final Logger log = LoggerFactory.getLogger(TransactionServiceImpl.class);
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private TransactionKafkaService transactionKafkaService;

    @Override
    public TransactionModel createTransaction(TransactionModel transaction) {
        try {
            TransactionEntity transactionEntity = new TransactionEntity();
            BeanUtils.copyProperties(transaction, transactionEntity);
            transactionEntity = transactionRepository.save(transactionEntity);
            transaction.setTransactionId(transactionEntity.getTransactionId());
            //publishes transaction to topic
            transactionKafkaService.publishTransactionToTopic(transaction);
            return transaction;
        } catch (Exception e) {
            throw new RuntimeException("Unable to create transaction", e);
        }
    }

    @Override
    public PageableTransactions getAllTransactions(int page, int size) {
        try {
            Page<TransactionEntity> pageableTransactionsFromDatabase = transactionRepository.findAll(Pageable.ofSize(size).withPage(page));
            List<TransactionModel> transactions = new ArrayList<>();
            for(TransactionEntity transactionEntity:pageableTransactionsFromDatabase.getContent()){
                TransactionModel transactionModel = new TransactionModel();
                BeanUtils.copyProperties(transactionEntity,transactionModel);
                transactions.add(transactionModel);
            }
            PageableTransactions pageableTransactions = new PageableTransactions(transactions,pageableTransactionsFromDatabase.getTotalPages(),pageableTransactionsFromDatabase.getTotalElements());
            return pageableTransactions;
        } catch (Exception e) {
            throw new RuntimeException("Unable to fetch transactions", e);
        }
    }

    @Override
    public TransactionModel updateTransaction(TransactionModel transaction) {
        try {
            TransactionEntity transactionEntity = new TransactionEntity();
            BeanUtils.copyProperties(transaction, transactionEntity);
            transactionEntity = transactionRepository.save(transactionEntity);
            transaction.setTransactionId(transactionEntity.getTransactionId());
            return transaction;
        } catch (Exception e) {
            throw new RuntimeException("Unable to update transaction", e);
        }
    }

    @Override
    public void deleteTransaction(String transactionId) {
        try {
            if(!transactionRepository.existsById(transactionId)){
                throw new RuntimeException("Transaction not found");
            }
            transactionRepository.deleteById(transactionId);
        }
        catch (RuntimeException e){
            throw e;
        } 
        catch (Exception e) {
            throw new RuntimeException("Unable to delete transaction", e);
        }
    }
}