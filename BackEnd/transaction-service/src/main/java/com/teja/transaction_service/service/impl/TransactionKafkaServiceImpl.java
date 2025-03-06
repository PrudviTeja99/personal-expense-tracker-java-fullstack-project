package com.teja.transaction_service.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teja.transaction_service.model.TransactionModel;
import com.teja.transaction_service.service.TransactionKafkaService;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class TransactionKafkaServiceImpl implements TransactionKafkaService {
    private static final Logger log = LoggerFactory.getLogger(TransactionKafkaServiceImpl.class);
    @Autowired
    private KafkaTemplate kafkaTemplate;

    @Value("${spring.kafka.producer.topic}")
    private String kafkaTopic;

    public CompletableFuture<SendResult<String,String>> publishTransactionToTopic(TransactionModel transactionModel) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        ProducerRecord<String,String> producerRecord = new ProducerRecord<>(kafkaTopic,transactionModel.getUserId(),objectMapper.writeValueAsString(transactionModel));
        CompletableFuture<SendResult<String,String>> sendResultCompletableFuture = kafkaTemplate.send(producerRecord);
        return sendResultCompletableFuture.whenComplete((sendResult, throwable) -> {
            if(throwable!=null){
                System.out.println("Unable to publish to topic !!");
            }
            else{
                System.out.println("Successfully published transaction !!");
            }
        });
    }
}
