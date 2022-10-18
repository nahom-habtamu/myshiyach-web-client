import { ConfirmationResult } from "firebase/auth";
import AuthPhoneNumberRequest from "../../models/auth_phone_number_request";

export const AUTH_PHONE_NUMBER = "authActionTypes/AUTH_PHONE_NUMBER";
export interface AuthPhoneNumberAction {
  type: typeof AUTH_PHONE_NUMBER;
  payload: AuthPhoneNumberRequest;
}

export const AUTH_PHONE_NUMBER_INITIATE =
  "authActionTypes/AUTH_PHONE_NUMBER_INITIATE";
export interface AuthPhoneNumberInitateAction {
  type: typeof AUTH_PHONE_NUMBER_INITIATE;
}

export const AUTH_PHONE_NUMBER_LOADING =
  "authActionTypes/AUTH_PHONE_NUMBER_LOADING";
export interface AuthPhoneNumberLoadingAction {
  type: typeof AUTH_PHONE_NUMBER_LOADING;
}

export const AUTH_PHONE_NUMBER_SUCCESS =
  "authActionTypes/AUTH_PHONE_NUMBER_SUCCESS";
export interface AuthPhoneNumberSuccessAction {
  type: typeof AUTH_PHONE_NUMBER_SUCCESS;
  payload: ConfirmationResult;
}

export const AUTH_PHONE_NUMBER_FAILURE =
  "authActionTypes/AUTH_PHONE_NUMBER_FAILURE";
export interface AuthPhoneNumberFailureAction {
  type: typeof AUTH_PHONE_NUMBER_FAILURE;
  message: String;
}

export type AuthPhoneNumberActionType =
  | AuthPhoneNumberAction
  | AuthPhoneNumberInitateAction
  | AuthPhoneNumberLoadingAction
  | AuthPhoneNumberFailureAction
  | AuthPhoneNumberSuccessAction;
