
export type GeneralState  = {
    completedSteps: string[];
    inCheckout: boolean;
    currentStep: string;
}

export const initialGeneralState = {
    completedSteps: [],
    inCheckout: false,
    currentStep: '',
}