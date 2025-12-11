import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent, loadChildren: () => import('./modules/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
];