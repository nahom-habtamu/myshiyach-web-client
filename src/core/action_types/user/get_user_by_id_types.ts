import User from "../../models/user/user";

export const GET_USER_BY_ID = "userActionTypes/GET_USER_BY_ID";
export interface GetUserByIdAction {
  type: typeof GET_USER_BY_ID;
  payload: {
    id: string;
    token: string;
  };
}

export const CLEAR_GET_USER_BY_ID = "userActionTypes/CLEAR_GET_USER_BY_ID";
export interface ClearGetUserByIdAction {
  type: typeof CLEAR_GET_USER_BY_ID;
}

export const GET_USER_BY_ID_INITIATE =
  "userActionTypes/GET_USER_BY_ID_INITIATE";
export interface GetUserByIdInitateAction {
  type: typeof GET_USER_BY_ID_INITIATE;
}

export const GET_USER_BY_ID_LOADING = "userActionTypes/GET_USER_BY_ID_LOADING";
export interface GetUserByIdLoadingAction {
  type: typeof GET_USER_BY_ID_LOADING;
}

export const GET_USER_BY_ID_SUCCESS = "userActionTypes/GET_USER_BY_ID_SUCCESS";
export interface GetUserByIdSuccessAction {
  type: typeof GET_USER_BY_ID_SUCCESS;
  payload: User;
}

export const GET_USER_BY_ID_FAILURE = "userActionTypes/GET_USER_BY_ID_FAILURE";
export interface GetUserByIdFailureAction {
  type: typeof GET_USER_BY_ID_FAILURE;
  message: String;
}

export type GetUserByIdActionType =
  | GetUserByIdAction
  | ClearGetUserByIdAction
  | GetUserByIdInitateAction
  | GetUserByIdLoadingAction
  | GetUserByIdFailureAction
  | GetUserByIdSuccessAction;
