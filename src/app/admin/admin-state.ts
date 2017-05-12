import { OrderDetail } from './../core/models/orderDetail';
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
export type AdminState = {
    adminMode: boolean;
    products: Product[];
    orders: OrderDetail[];
}

export const initialAdminState = {
    adminMode: false,
    products: [],
    orders: []
}