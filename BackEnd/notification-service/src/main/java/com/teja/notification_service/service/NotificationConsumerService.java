package com.teja.notification_service.service;

import com.teja.notification_service.model.Notification;

import java.time.LocalDateTime;
import java.util.UUID;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationConsumerService {

    private final SimpMessagingTemplate messagingTemplate;

    public NotificationConsumerService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @KafkaListener(topics = "${spring.kafka.consumer.topics}", groupId = "${spring.kafka.consumer.group-id}")
    public void consume(ConsumerRecord<String, String> record) {
        String notificationId = UUID.randomUUID().toString();
        Notification notification = new Notification(notificationId, record.value(), "Budget Alert", LocalDateTime.now());
        messagingTemplate.convertAndSendToUser(record.key(), "/notifications", notification);
    }
} 