import Conversation from "../../models/chat/conversation";
import User from "../../models/user/user";

export const GET_STRANGER_USER = "chatActionTypes/GET_STRANGER_USER";
export interface GetStrangerUserAction {
  type: typeof GET_STRANGER_USER;
  payload: {
    currentUserId: string;
    token: string;
    conversation: Conversation;
  };
}

export const GET_STRANGER_USER_LOADING =
  "chatActionTypes/GET_STRANGER_USER_LOADING";
export interface GetStrangerUserLoadingAction {
  type: typeof GET_STRANGER_USER_LOADING;
}

export const GET_STRANGER_USER_SUCCESS =
  "chatActionTypes/GET_STRANGER_USER_SUCCESS";
export interface GetStrangerUserSuccessAction {
  type: typeof GET_STRANGER_USER_SUCCESS;
  payload: User;
}

export const GET_STRANGER_USER_FAILURE =
  "chatActionTypes/GET_STRANGER_USER_FAILURE";
export interface GetStrangerUserFailureAction {
  type: typeof GET_STRANGER_USER_FAILURE;
  message: String;
}

export type GetStrangerUserActionType =
  | GetStrangerUserAction
  | GetStrangerUserLoadingAction
  | GetStrangerUserFailureAction
  | GetStrangerUserSuccessAction;
