import { ProductActions } from 'app/home/product-list/actions/product-actions';
import { Store } from '@ngrx/store';
import { ProductsService } from './../../core/services/products.service';
import { AdminActions } from './../actions/admin-actions';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects'
import { AppState } from "app/interface";

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private service: ProductsService,
        private _store: Store<AppState>,
        private productActions: ProductActions
    ) { }

    @Effect()
    loadProducts$ = this.actions$
        .ofType(AdminActions.TURN_ON)
        .switchMap((action: Action) => {
            this._store.dispatch({ type: 'RESET' })
            return this.service.getProducts(action.payload.page, action.payload.count)
        })
        .map(products => {
            console.log(products)
            return this
                .productActions
                .loadProductSuccess(products)
        })
}