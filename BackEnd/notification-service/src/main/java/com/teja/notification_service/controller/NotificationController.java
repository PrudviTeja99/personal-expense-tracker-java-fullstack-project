package com.teja.notification_service.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class NotificationController {

    // @MessageMapping("/send")
    // @SendTo("/users/notification")
    // public String sendNotification(@RequestBody String message) {
    //     return message;
    // }
}
