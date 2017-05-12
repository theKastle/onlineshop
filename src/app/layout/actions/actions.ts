import { OrderDetail } from './../../core/models/orderDetail';
import { Product } from 'app/core/models/product';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

@Injectable()
export class GeneralActions {
    static START_CHECKOUT_STEPS = 'START_CHECKOUT_STEPS'
    startCheckoutSteps(): Action {
        return {
            type: GeneralActions.START_CHECKOUT_STEPS
        }
    }

    static TO_STEP = 'TO_STEP'
    toStep(step): Action {
        return {
            type: GeneralActions.TO_STEP,
            payload: step
        }
    }

    static PAYMENT_DONE = 'PAYMENT_DONE'
    paymentDone(): Action {
        return {
            type: GeneralActions.PAYMENT_DONE
        }
    }
}