package com.teja.notification_service.model;

import java.time.LocalDateTime;

public class Notification {
    private String notificationId;
    private String message;
    private String type;
    private LocalDateTime createdAt;

    public Notification(String notificationId, String message, String type, LocalDateTime createdAt) {
        this.notificationId = notificationId;
        this.message = message;
        this.type = type;
        this.createdAt = createdAt;
    }

    public Notification() {
    }

    public String getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(String notificationId) {
        this.notificationId = notificationId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Notification [notificationId=" + notificationId + ", message=" + message + ", type=" + type
                + ", createdAt=" + createdAt + "]";
    }    
} 