import { getProductListState } from 'app/home/product-list/selector/selector';
import { ActionReducer } from '@ngrx/store';
import { ProductActions } from './../actions/product-actions';
import { Action } from '@ngrx/store';
import { ProductListState, initialStateRecord } from './../product-list-state';
import { Product } from '../../../core/models/product';
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


export const ProductReducer: ActionReducer<ProductListState> =
    (state: ProductListState = initialStateRecord as ProductListState, { type, payload }: Action): ProductListState => {
        switch (type) {
            case ProductActions.LOAD_PRODUCTS_SUCCESSFUL:
                // const page = payload.page;
                // const totalPages = payload.totalPages;
                console.log('PAYLOAD = ', payload)
                state.productEntities = payload
                console.log('HEEEEE' , state.productEntities)

                return state
            case 'RESET':
                return initialStateRecord;
            default:
                return state; // default return previous state
        }

    }
