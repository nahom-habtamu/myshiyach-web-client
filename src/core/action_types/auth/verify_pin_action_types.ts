import VerifyPinRequest from "../../models/auth/verify_pin_request";

export const VERIFY_PIN = "authActionTypes/VERIFY_PIN";
export interface VerifyPinAction {
  type: typeof VERIFY_PIN;
  payload: VerifyPinRequest;
}

export const VERIFY_PIN_INITIATE = "authActionTypes/VERIFY_PIN_INITIATE";
export interface VerifyPinInitateAction {
  type: typeof VERIFY_PIN_INITIATE;
}

export const VERIFY_PIN_LOADING = "authActionTypes/VERIFY_PIN_LOADING";
export interface VerifyPinLoadingAction {
  type: typeof VERIFY_PIN_LOADING;
}

export const VERIFY_PIN_SUCCESS = "authActionTypes/VERIFY_PIN_SUCCESS";
export interface VerifyPinSuccessAction {
  type: typeof VERIFY_PIN_SUCCESS;
}

export const VERIFY_PIN_FAILURE = "authActionTypes/VERIFY_PIN_FAILURE";
export interface VerifyPinFailureAction {
  type: typeof VERIFY_PIN_FAILURE;
  message: String;
}

export type VerifyPinActionType =
  | VerifyPinAction
  | VerifyPinInitateAction
  | VerifyPinLoadingAction
  | VerifyPinFailureAction
  | VerifyPinSuccessAction;
