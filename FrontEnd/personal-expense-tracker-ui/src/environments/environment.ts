// src/environments/environment.ts
export const environment = {
    production: false,
    notificationServiceURL: 'http://localhost:8083/websocket',
    budgetServiceURL: 'http://localhost:8081/api/v1/budgets',
    transactionServiceURL: 'http://localhost:8080/api/v1/transactions',
    keycloak: {
        url: 'http://localhost:8443',
        realm: 'pet',
        clientId: 'pet-client',
        clientSecret:'sAJqPRMZPJE1zmiOSBXLdYnDQ2Dj63zw',
        redirectUri: 'http://localhost:4200/auth/login'
    }
};