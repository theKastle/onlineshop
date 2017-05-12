import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { ProductActions } from '../actions/product-actions';
import { ProductsService } from '../../../core/services/products.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects'

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private service: ProductsService,
        private productActions: ProductActions,
        private af: AngularFire
    ) { }

    // @Effect()
    // loadProducts$ = this.actions$
    //     .ofType(ProductActions.LOAD_PRODUCTS)
    //     .switchMap((action: Action) => {
    //         return this.service.getProducts(action.payload.page, action.payload.count)
    //     })
    //     .map(products => {
    //         console.log('payload in effect = ', products)
    //     //    Observable.of({ type: ProductActions.LOAD_PRODUCTS_SUCCESSFUL, payload: products })
    //         return this
    //             .productActions
    //             .loadProductSuccess(products)
    //     })

    @Effect() pullArrayFromFirebase$ = this.actions$
        .ofType(ProductActions.LOAD_PRODUCTS)
        .switchMap(() =>
            this.af.database.list('/products')
                .switchMap(result =>
                    Observable.of({ type: ProductActions.LOAD_PRODUCTS_SUCCESSFUL, payload: result })
                )
        )

    @Effect() getCategory$ = this.actions$
        .ofType(ProductActions.GET_CATEGORY)
        .switchMap((payload) => {
            console.log('GET_CAT_EFFECT == ', payload)
            return this.af.database.list('/products', {
                query: {
                    orderByChild: 'category',
                    equalTo: payload.payload
                }
            })
                .switchMap(result => {
                    console.log(result)
                    return Observable.of({ type: ProductActions.LOAD_PRODUCTS_SUCCESSFUL, payload: result })
                })
        })
}