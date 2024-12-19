import { Routes } from '@angular/router';
import { SalesViewComponent } from './views/sales/sales-view.component';
import { HrPortalViewComponent } from './views/hr-portal/hr-portal-view.component';
import { FinanceViewComponent } from './views/finance/finance-view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inventory'
  },
  {
    path: 'inventory',
    title: "Inventory",
    component: FinanceViewComponent
  },
  {
    path: 'hr-portal',
    title: "HR Portal",
    component: HrPortalViewComponent
  },
  {
    path: 'finance',
    title: "Finance",
    component: FinanceViewComponent
  },
  {
    path: 'fleet',
    title: "Fleet Management",
    component: SalesViewComponent
  },
  {
    path: 'sales',
    title: "Sales",
    component: SalesViewComponent
  },
];
