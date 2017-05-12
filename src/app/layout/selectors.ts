
/**
 * If the state tree is large, or the calculation expensive, 
 * repeating the calculation on every update may cause performance problems. 
 * Reselect can help to avoid these unnecessary recalculations => Memoized Selector
 */
import { createSelector } from 'reselect';
import { AppState } from './../interface';
import { GeneralState } from "app/general-state";


export function getGeneralState(state: AppState): GeneralState {
    // console.log('In cart selector = ', state.checkout)
    return state.general;
}

export function fetchCurrentStep(state: GeneralState) {
    return state.currentStep;
}

export function fetchCompletedSteps(state: GeneralState) {
    return state.completedSteps;
}

export const getCurrentStep = createSelector(getGeneralState, fetchCurrentStep)
export const getCompletedSteps = createSelector(getGeneralState, fetchCompletedSteps)