import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

@Injectable()
export class ProductActions {
    static LOAD_PRODUCTS = 'LOAD_PRODUCTS'
    loadProducts(_page: number, _count: number): Action {
        return {
            type: ProductActions.LOAD_PRODUCTS,
            payload: {
                page: _page,
                count: _count
            }
        }
    }

    static LOAD_PRODUCTS_SUCCESSFUL = 'LOAD_PRODUCTS_SUCCESSFUL'
    loadProductSuccess(products): Action {
        return {
            type: ProductActions.LOAD_PRODUCTS_SUCCESSFUL,
            payload: products
        }
    }

    static ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
    addProductSuccess(): Action {
        return {
            type: ProductActions.ADD_PRODUCTS_SUCCESS,
            payload: null
        };
    }

    static GET_CATEGORY = 'GET_CATEGORY';
    get(category): Action {
        console.log(category)
        switch (category) {
            case 'Food':
                return {
                    type: ProductActions.GET_CATEGORY,
                    payload: 'Food'
                };
            case 'Drinks':
                return {
                    type: ProductActions.GET_CATEGORY,
                    payload: 'Drinks'
                };
            case 'Laptop':
                return {
                    type: ProductActions.GET_CATEGORY,
                    payload: 'Laptop'
                }
        }

    }

    // static GET_DRINK = 'GET_DRINK';
    // getDrinks(): Action {
    //     return {
    //         type: ProductActions.GET_DRINK,
    //         payload: null
    //     };
    // }

    // static GET_LAPTOP = 'GET_LAPTOP';
    // getLaptop(): Action {
    //     return {
    //         type: ProductActions.GET_LAPTOP,
    //         payload: null
    //     };
    // }
}