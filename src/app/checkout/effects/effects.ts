import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects'

@Injectable()
export class CheckoutEffects {
    // constructor(
    //     private actions$: Actions,
    //     private service: ProductsService,
    //     private productActions: ProductActions
    // ) { }

    // @Effect()
    // loadProducts$ = this.actions$
    //     .ofType(ProductActions.LOAD_PRODUCTS)
    //     .switchMap((action: Action) => {
    //         console.log('action', action)
    //         return this.service.getProducts(action.payload.page, action.payload.count)
    //     })
    //     .map(products => {
    //         console.log('effect = ', products)
    //         return this
    //             .productActions
    //             .loadProductSuccess(products)
    //     })
}