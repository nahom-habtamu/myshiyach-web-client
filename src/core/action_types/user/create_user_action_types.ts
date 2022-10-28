import SignUpRequest from "../../models/user/signup_request";
import User from "../../models/user/user";

export const CREATE_USER = "userActionTypes/CREATE_USER";
export interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: SignUpRequest;
}

export const CREATE_USER_INITIATE = "userActionTypes/CREATE_USER_INITIATE";
export interface CreateUserInitateAction {
  type: typeof CREATE_USER_INITIATE;
}

export const CREATE_USER_LOADING = "userActionTypes/CREATE_USER_LOADING";
export interface CreateUserLoadingAction {
  type: typeof CREATE_USER_LOADING;
}

export const CREATE_USER_SUCCESS = "userActionTypes/CREATE_USER_SUCCESS";
export interface CreateUserSuccessAction {
  type: typeof CREATE_USER_SUCCESS;
  payload: User;
}

export const CREATE_USER_FAILURE = "userActionTypes/CREATE_USER_FAILURE";
export interface CreateUserFailureAction {
  type: typeof CREATE_USER_FAILURE;
  message: String;
}

export type CreateUserActionType =
  | CreateUserAction
  | CreateUserInitateAction
  | CreateUserLoadingAction
  | CreateUserFailureAction
  | CreateUserSuccessAction;
