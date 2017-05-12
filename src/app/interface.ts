import { GeneralState } from './general-state';
import { ProductListState } from 'app/home/product-list/product-list-state';
import { CheckoutState } from "app/checkout/checkout-state";
import { AdminState } from "app/admin/admin-state";

export interface AppState {
    products: ProductListState,
    checkout: CheckoutState,
    general: GeneralState,
    admin: AdminState
}