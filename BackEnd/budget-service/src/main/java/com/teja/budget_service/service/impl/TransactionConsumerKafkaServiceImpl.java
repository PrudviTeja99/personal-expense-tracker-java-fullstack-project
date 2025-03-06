package com.teja.budget_service.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teja.budget_service.service.TransactionConsumerKafkaService;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class TransactionConsumerKafkaServiceImpl implements TransactionConsumerKafkaService {
    @KafkaListener(topics = "${spring.kafka.consumer.topic}")
    public void consumeTransaction(ConsumerRecord<String,String> consumerRecord){
        ObjectMapper objectMapper = new ObjectMapper();
        JSONObject transactionRecord = new JSONObject(consumerRecord.value());
        System.out.println(transactionRecord);
    }
}
