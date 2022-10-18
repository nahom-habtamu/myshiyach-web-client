import LoginRequest from "../../models/login_request";
import LoginResult from "../../models/login_result";

export const LOGIN = "authActionTypes/LOGIN";
export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginRequest;
}

export const LOGIN_INITIATE = "authActionTypes/LOGIN_INITIATE";
export interface LoginInitateAction {
  type: typeof LOGIN_INITIATE;
}

export const LOGIN_LOADING = "authActionTypes/LOGIN_LOADING";
export interface LoginLoadingAction {
  type: typeof LOGIN_LOADING;
}

export const LOGIN_SUCCESS = "authActionTypes/LOGIN_SUCCESS";
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginResult;
}

export const LOGIN_FAILURE = "authActionTypes/LOGIN_FAILURE";
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  message: String;
}

export type LoginActionType =
  | LoginAction
  | LoginInitateAction
  | LoginLoadingAction
  | LoginFailureAction
  | LoginSuccessAction;
