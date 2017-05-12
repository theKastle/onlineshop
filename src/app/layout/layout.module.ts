import { SharedSemanticModule } from './../shared/shared-semantic/shared-semantic.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutStepsComponent } from './checkout-steps/checkout-steps.component';

@NgModule({
  imports: [
    CommonModule,
    SharedSemanticModule],
  exports: [
    CartSummaryComponent,
    CheckoutStepsComponent
  ],
  declarations: [CartSummaryComponent, CheckoutStepsComponent]
})
export class LayoutModule { }
