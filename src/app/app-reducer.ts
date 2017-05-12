import { GeneralReducer } from './layout/reducers/reducers';
import { GeneralState } from 'app/general-state';
import { AdminState } from './admin/admin-state';
import { AdminReducer } from './admin/reducers/reducers'
import { CheckoutReducer } from './checkout/reducers/reducers';
import { AppState } from './interface';

import { compose } from "@ngrx/core";
import { combineReducers, ActionReducer } from "@ngrx/store";
import { ProductReducer } from "app/home/product-list/reducers/product-reducer";
import { storeLogger } from "ngrx-store-logger";


import { storeFreeze } from 'ngrx-store-freeze';


const reducers = {
    // admin: AdminState,
    products: ProductReducer,
    checkout: CheckoutReducer,
    general: GeneralReducer,
    admin: AdminReducer
};

export const developmentReducer: ActionReducer<AppState>
    = compose(storeLogger(),
        combineReducers
    )(reducers);;

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

