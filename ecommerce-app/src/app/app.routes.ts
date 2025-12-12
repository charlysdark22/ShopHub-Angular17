import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/product-list/product-list.component').then((m) => m.ProductListComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./components/product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then((m) => m.CartComponent),
    canActivate: [AuthGuard],
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'auth',
    loadComponent: () => import('./components/auth/auth.component').then((m) => m.AuthComponent),
  },
];