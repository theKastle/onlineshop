import { Product } from './../../core/models/product';
import { CartLine } from './../../core/models/cartLine';
import { CheckoutState, initialCheckoutState } from './../checkout-state';
import { CheckoutActions } from './../actions/checkout-actions';
import { Action } from '@ngrx/store';
/**
 * Reduce Action for products 
 * 
 * Action is a plain JS object
 * describing an action.
 * 
 * It contains
 * - type: like a command
 * - payload: data associate with the action
 */

export const initialState = new initialCheckoutState() as CheckoutState

export const CheckoutReducer =
    (state: CheckoutState = initialState, { type, payload }: Action): CheckoutState => {
        switch (type) {
            case CheckoutActions.ADD_TO_CART:

                let id = state.items.findIndex(e => e.product.id == payload.id)
                let items = state.items
                let totalItems = state.totalItems + 1

                if (id < 0) {
                    items = items.push(new CartLine(payload as Product));
                } else {
                    items = items.update(id, e => {
                        var newItem: CartLine = new CartLine(e.product)
                        newItem.quantity = e.quantity + 1
                        return newItem
                    })
                }

                let totalPrice = items.reduce((totalPrice, e) => {
                    return totalPrice += e.product.price * e.quantity
                }, 0)

                return state.merge({
                    items, totalPrice, totalItems
                }) as CheckoutState;
           
            case 'RESET':
                return initialState;

            default:
                return state; // default return previous state
        }
    }
