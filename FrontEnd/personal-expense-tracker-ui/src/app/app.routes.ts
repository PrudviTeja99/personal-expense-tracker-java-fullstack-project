import { Routes } from '@angular/router';
import { TransactionListComponent } from './features/transaction/components/transaction-list/transaction-list.component';
import { BudgetListComponent } from './features/budget/components/budget-list/budget-list.component';
import { AnalyticsOverviewComponent } from './features/analytics/components/analytics-overview/analytics-overview.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

export const routes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent 
  },
  {
    path: 'auth/login',
    component: AuthComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { 
        path: 'overview', 
        component: AnalyticsOverviewComponent, 
        canActivate: [authGuard] 
      },
      { 
        path: 'transactions', 
        component: TransactionListComponent,
        canActivate: [authGuard] 
      },
      { 
        path: 'budgets', 
        component: BudgetListComponent,
        canActivate: [authGuard] 
      },
      { 
        path: '', 
        redirectTo: '/overview', 
        pathMatch: 'full'
      }
    ]
  },
];
