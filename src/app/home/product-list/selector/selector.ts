import { ProductListState } from 'app/home/product-list/product-list-state';
import { AppState } from './../../../interface';
import { Product } from "app/core/models/product";
import { createSelector } from 'reselect';


export function getProductListState(state: AppState): ProductListState {
    return state.products;
}

export function fetchProducts(state: ProductListState) {
    const products = state.productEntities;
    return products;
}

export function fetchSelectedCategory(state: ProductListState) {
    return state.selectedCategory;
}

export function fetchCurrentPage(state: ProductListState) {
    return state.page
}

export const getProducts = createSelector(getProductListState, fetchProducts)
export const getCurrentPage = createSelector(getProductListState, fetchCurrentPage)
export const getSelectedCategory = createSelector(getProductListState, fetchSelectedCategory)