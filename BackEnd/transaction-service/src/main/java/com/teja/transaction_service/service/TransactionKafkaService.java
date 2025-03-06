package com.teja.transaction_service.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.teja.transaction_service.model.TransactionModel;
import org.springframework.kafka.support.SendResult;

import java.util.concurrent.CompletableFuture;

public interface TransactionKafkaService {
    CompletableFuture<SendResult<String,String>> publishTransactionToTopic(TransactionModel transactionModel) throws JsonProcessingException;
}
