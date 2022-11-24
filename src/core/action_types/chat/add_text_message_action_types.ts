import Message from "../../models/chat/message";

export const ADD_TEXT_MESSAGE = "chatActionTypes/ADD_TEXT_MESSAGE";
export interface AddTextMessageAction {
  type: typeof ADD_TEXT_MESSAGE;
  payload: {
    conversationId: string;
    message: Message;
  };
}

export const ADD_TEXT_MESSAGE_LOADING =
  "chatActionTypes/ADD_TEXT_MESSAGE_LOADING";
export interface AddTextMessageLoadingAction {
  type: typeof ADD_TEXT_MESSAGE_LOADING;
}

export const ADD_TEXT_MESSAGE_SUCCESS =
  "chatActionTypes/ADD_TEXT_MESSAGE_SUCCESS";
export interface AddTextMessageSuccessAction {
  type: typeof ADD_TEXT_MESSAGE_SUCCESS;
}

export const ADD_TEXT_MESSAGE_FAILURE =
  "chatActionTypes/ADD_TEXT_MESSAGE_FAILURE";
export interface AddTextMessageFailureAction {
  type: typeof ADD_TEXT_MESSAGE_FAILURE;
  message: String;
}

export type AddTextMessageActionType =
  | AddTextMessageAction
  | AddTextMessageLoadingAction
  | AddTextMessageFailureAction
  | AddTextMessageSuccessAction;
