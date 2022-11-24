import Conversation from "../../models/chat/conversation";
import User from "../../models/user/user";

export const GET_CHAT_DETAIL = "chatActionTypes/GET_CHAT_DETAIL";
export interface GetChatDetailAction {
  type: typeof GET_CHAT_DETAIL;
  payload: {
    conversationId: string;
    currentUserId: string;
    token: string;
  };
}

export const GET_CHAT_DETAIL_LOADING =
  "chatActionTypes/GET_CHAT_DETAIL_LOADING";
export interface GetChatDetailLoadingAction {
  type: typeof GET_CHAT_DETAIL_LOADING;
}

export const GET_CHAT_DETAIL_SUCCESS =
  "chatActionTypes/GET_CHAT_DETAIL_SUCCESS";
export interface GetChatDetailSuccessAction {
  type: typeof GET_CHAT_DETAIL_SUCCESS;
  payload: {
    conversation: Conversation;
    strangerUser: User;
  };
}

export const GET_CHAT_DETAIL_FAILURE =
  "chatActionTypes/GET_CHAT_DETAIL_FAILURE";
export interface GetChatDetailFailureAction {
  type: typeof GET_CHAT_DETAIL_FAILURE;
  message: String;
}

export type GetChatDetailActionType =
  | GetChatDetailAction
  | GetChatDetailLoadingAction
  | GetChatDetailFailureAction
  | GetChatDetailSuccessAction;
