import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

@Injectable()
export class AdminActions {
    static TURN_ON = 'TURN_ON'
    turn_on(): Action {
        return {
            type: AdminActions.TURN_ON,
        }
    }

    static TURN_OFF = 'TURN_OFF'
    turnOff(): Action {
        return {
            type: AdminActions.TURN_OFF,
        }
    }
}