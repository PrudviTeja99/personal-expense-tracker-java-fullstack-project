import { Routes } from '@angular/router';
import { TransactionListComponent } from './features/transaction/components/transaction-list/transaction-list.component';
import { BudgetListComponent } from './features/budget/components/budget-list/budget-list.component';
import { AnalyticsOverviewComponent } from './features/analytics/components/analytics-overview/analytics-overview.component';
export const routes: Routes = [
  { path: 'overview', component: AnalyticsOverviewComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'budget', component: BudgetListComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }
];
