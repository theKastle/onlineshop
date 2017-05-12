import { Category } from './../../core/models/category';
import { Product } from 'app/core/models/product';
import { Observable } from 'rxjs/Observable';
import { Map, Record, List } from 'immutable';

export type ProductListState =  {
    productEntities: any[];
    selectedProductId: number;
    categories: Category[];
    selectedCategory: string;
    page: number;
    pageCount: number;
    //  totalPages: number;
    // productList: Product[],
    // page: number,
    // totalPages: number,
    // count: number
}

/**
 * A record is similar to a JS object, 
 * but enforce a specific set of allowed string keys, 
 * and have default values.
 */
export const initialStateRecord = {
    productEntities: [],
    selectedProductId: null,
    categories: [],
    selectedCategory: null,
    page: 1,
    pageCount: 5,
}

// export const initialState: ProductListState = {
//     productList: [],
//     page: 1,
//     count: 2,
//     totalPages: undefined
// }