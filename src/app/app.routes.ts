import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadChildren: './home/index#HomeModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'food', loadChildren: './home/index#HomeModule', data: { category: 'Food' } },
  { path: 'drink', loadChildren: './home/index#HomeModule', data: { category: 'Drinks' } },
  { path: 'laptop', loadChildren: './home/index#HomeModule', data: { category: 'Laptop' } },
];
