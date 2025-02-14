import { Routes } from '@angular/router';
import { SalesViewComponent } from './views/sales/sales-view.component';
import { HrPortalViewComponent } from './views/hr-portal/hr-portal-view.component';
import { FinanceViewComponent } from './views/finance/finance-view.component';
import { ErpHGridViewComponent } from './views/erp-hgrid/erp-hgrid-view.component';
import { FleetManagementViewComponent } from './views/fleet-management/fleet-management-view.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    title: "home",
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inventory'
      },
      {
        path: 'inventory',
        title: "Inventory",
        component: ErpHGridViewComponent
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
        path: 'sales',
        title: "Sales",
        component: SalesViewComponent
      },
      {
        path: 'fleet',
        title: "Fleet Management",
        component: FleetManagementViewComponent
      }
    ]
  },
  {
    path: 'inventory',
    title: "Inventory",
    component: ErpHGridViewComponent
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
    path: 'sales',
    title: "Sales",
    component: SalesViewComponent
  },
  {
    path: 'fleet',
    title: "Fleet Management",
    component: FleetManagementViewComponent
  }
];
