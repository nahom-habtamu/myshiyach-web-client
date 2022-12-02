export const CHANGE_PASSWORD = "userActionTypes/CHANGE_PASSWORD";
export interface ChangePasswordAction {
  type: typeof CHANGE_PASSWORD;
  payload: {
    phoneNumber: string;
    password: string;
  };
}

export const CHANGE_PASSWORD_INITIATE =
  "userActionTypes/CHANGE_PASSWORD_INITIATE";
export interface ChangePasswordInitateAction {
  type: typeof CHANGE_PASSWORD_INITIATE;
}

export const CHANGE_PASSWORD_LOADING =
  "userActionTypes/CHANGE_PASSWORD_LOADING";
export interface ChangePasswordLoadingAction {
  type: typeof CHANGE_PASSWORD_LOADING;
}

export const CHANGE_PASSWORD_SUCCESS =
  "userActionTypes/CHANGE_PASSWORD_SUCCESS";
export interface ChangePasswordSuccessAction {
  type: typeof CHANGE_PASSWORD_SUCCESS;
  payload: boolean;
}

export const CHANGE_PASSWORD_FAILURE =
  "userActionTypes/CHANGE_PASSWORD_FAILURE";
export interface ChangePasswordFailureAction {
  type: typeof CHANGE_PASSWORD_FAILURE;
  message: String;
}

export const CHANGE_PASSWORD_CLEAR = "userActionTypes/CHANGE_PASSWORD_CLEAR";
export interface ChangePasswordClearAction {
  type: typeof CHANGE_PASSWORD_CLEAR;
}

export type ChangePasswordActionType =
  | ChangePasswordAction
  | ChangePasswordInitateAction
  | ChangePasswordLoadingAction
  | ChangePasswordFailureAction
  | ChangePasswordSuccessAction
  | ChangePasswordClearAction;
