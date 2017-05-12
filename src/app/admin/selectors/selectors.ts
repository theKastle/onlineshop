import { GeneralState } from 'app/general-state';
import { AppState } from './../../interface';
import { ProductListState } from 'app/home/product-list/product-list-state';
import { Product } from "app/core/models/product";
import { createSelector } from 'reselect';
import { AdminState } from "app/admin/admin-state";

export function getAdminState(state: AppState): AdminState {
    return state.admin;
}

export function fetchMode(state: AdminState) {
    return state.adminMode
}

export const getMode = createSelector(getAdminState, fetchMode) 
