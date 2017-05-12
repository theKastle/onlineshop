import { GeneralActions } from './../actions/actions';
import { GeneralState, initialGeneralState } from './../../general-state';
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

export const GeneralReducer =
    (state: GeneralState = initialGeneralState, { type, payload }: Action): GeneralState => {
        switch (type) {
            case GeneralActions.START_CHECKOUT_STEPS:
                if (!state.currentStep) {
                    state.currentStep = 'CART'
                }
                // } else {
                //     state.currentStep = payload.step
                //     state.completedSteps.push(payload.CheckoutStepsComponent)
                // }
                return state;

            case GeneralActions.TO_STEP:
                if (payload.step == 'ORDER_DETAIL') {
                    state.completedSteps.push('CART');
                } else if (payload.step == 'CHOOSE_PAYMENT') {
                    state.completedSteps.push('ORDER_DETAIL')
                } else
                    return initialGeneralState

                state.currentStep = payload.step;
                return state;

            case GeneralActions.PAYMENT_DONE:
                return initialGeneralState

            case 'RESET':
                return initialGeneralState

            default:
                return state; // default return previous state
        }
    }
