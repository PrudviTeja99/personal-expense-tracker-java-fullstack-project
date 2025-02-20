package com.teja.notification_service.controller;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teja.notification_service.model.Notification;

@RestController
public class NotificationController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @GetMapping("/send")
    // @SendTo("/users/notification")
    public void sendNotification() {
        String notificationId = UUID.randomUUID().toString();
        Notification notification = new Notification(notificationId, "Message for notification", "Budget Alert",
                LocalDateTime.now());
        messagingTemplate.convertAndSendToUser("john", "/notifications", notification);

    }
}
