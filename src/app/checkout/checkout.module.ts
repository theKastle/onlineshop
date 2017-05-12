import { ScriptService } from './../shared/script/script.service';
import { GeneralActions } from './../layout/actions/actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutActions } from './actions/checkout-actions';
import { routes } from './checkout.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    OrderDetailComponent,
    PaymentComponent],
  exports: [
  ],
  providers: [
    CheckoutActions,
    GeneralActions,
    ScriptService
  ]
})
export class CheckoutModule {
  constructor() {
    console.log('load checkout module')
  }
}
