import { CartLine } from './../core/models/cartLine';
import { List, Map, Record } from 'immutable';
import { Cart } from './../core/models/cart';
import { Observable } from 'rxjs/Observable';
import { Product } from './../core/models/product';

/**
 * Immutable Map is an unordered Collection.Keyed of (key, value) pairs 
 * with O(log32 N) gets and O(log32 N) persistent sets.
 * 
 */
export interface CheckoutState extends Map<string, any> {
    items: List<CartLine>;
    totalItems: number;
    totalPrice: number;
    billAddress: any;
    shipAddress: any;
}

export const initialCheckoutState = Record({
    items: List([]),
    totalItems: 0,
    totalPrice: 0,
    billAddress: null,
    shipAddress: null
})