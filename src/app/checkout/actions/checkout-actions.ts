import { OrderDetail } from './../../core/models/orderDetail';
import { Product } from 'app/core/models/product';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

@Injectable()
export class CheckoutActions {
    static ADD_TO_CART = 'ADD_TO_CART'
    addToCart(_product: Product): Action {
        return {
            type: CheckoutActions.ADD_TO_CART,
            payload: _product
        }
    }

    static PLACE_ORDER = 'PLACE_ORDER'
    placeOrder(_order: OrderDetail): Action {
        return {
            type: CheckoutActions.PLACE_ORDER,
            payload: _order
        }
    }
}