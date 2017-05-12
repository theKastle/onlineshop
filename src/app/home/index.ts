import { SharedSemanticModule } from './../shared/shared-semantic/shared-semantic.module';
import { CheckoutActions } from './../checkout/actions/checkout-actions';
import { PageItemComponent } from './product-list/pagination/page-item/page-item.component';
import { PaginationComponent } from './product-list/pagination/pagination.component';
import { HomeRoutes as routes } from './home.routes';
import { ProductActions } from './product-list/actions/product-actions';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedSemanticModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    PaginationComponent,
    PageItemComponent,
  ],
  providers: [
    ProductActions,
    CheckoutActions
  ]
})
export class HomeModule { }
