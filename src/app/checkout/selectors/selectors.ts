import { CheckoutState } from 'app/checkout/checkout-state';

/**
 * If the state tree is large, or the calculation expensive, 
 * repeating the calculation on every update may cause performance problems. 
 * Reselect can help to avoid these unnecessary recalculations => Memoized Selector
 */
import { createSelector } from 'reselect';
import { ProductListState } from 'app/home/product-list/product-list-state';
import { AppState } from './../../interface';

export function getCheckoutState(state: AppState): CheckoutState {
    // console.log('In cart selector = ', state.checkout)
    return state.checkout;
}

export function fetchCartLinesCount(state: CheckoutState) {
    return state.totalItems;
}

export function fetchTotalPrice(state: CheckoutState) {
    return state.totalPrice;
}

export function fetchItems(state: CheckoutState) {
    return state.items.toArray();
}

export const getCartLinesCount = createSelector(getCheckoutState, fetchCartLinesCount)
export const getTotalPrice = createSelector(getCheckoutState, fetchTotalPrice)
export const getItems = createSelector(getCheckoutState, fetchItems)
