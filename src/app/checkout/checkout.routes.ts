import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from "app/checkout/payment/payment.component";

export const routes = [
    { path: '', redirectTo: 'cart', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'order-detail', component: OrderDetailComponent },
    { path: 'payment', component: PaymentComponent }
];
