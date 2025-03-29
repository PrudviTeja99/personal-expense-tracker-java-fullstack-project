// src/environments/environment.prod.ts
export const environment = {
    production: true,
    notificationServiceURL: '/websocket',
    budgetServiceURL: '/api/v1/budgets',
    transactionServiceURL: '/api/v1/transactions',
    keycloak: {
        url: '/auth',
        realm: 'pet',
        clientId: 'pet-client',
        clientSecret: 'sAJqPRMZPJE1zmiOSBXLdYnDQ2Dj63zw',
        redirectUri: '/auth/login'
    }
};