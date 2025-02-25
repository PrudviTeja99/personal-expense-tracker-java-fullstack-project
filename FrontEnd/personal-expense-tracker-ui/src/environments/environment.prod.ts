// src/environments/environment.prod.ts
export const environment = {
    production: true,
    notificationServiceURL: 'http://notification-service/websocket', // Development URL
    budgetServiceURL: 'http://budget-service:8080/api/v1/budgets',
    transactionServiceURL: 'http://transaction-service:8080/api/v1/transactions'

  };