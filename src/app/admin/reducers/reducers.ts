import { AdminActions } from './../actions/admin-actions';
import { initialAdminState, AdminState } from './../admin-state';
import { Product } from './../../core/models/product';
import { CartLine } from './../../core/models/cartLine';
import { Action } from '@ngrx/store';
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

export const initialState = initialAdminState as AdminState

export const AdminReducer =
    (state: AdminState = initialState, { type, payload }: Action): AdminState => {
        switch (type) {
            case AdminActions.TURN_ON:

                return {
                    adminMode: true,
                } as AdminState
            
            case AdminActions.TURN_OFF:

                return {
                    adminMode: false,
                } as AdminState


            default:
                return state; // default return previous state
        }
    }
