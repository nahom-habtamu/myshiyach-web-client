import Message from "../../models/chat/message";

export const ADD_IMAGE_MESSAGE = "chatActionTypes/ADD_IMAGE_MESSAGE";
export interface AddImageMessageAction {
  type: typeof ADD_IMAGE_MESSAGE;
  payload: {
    conversationId: string;
    message: Message;
    image: File;
  };
}

export const ADD_IMAGE_MESSAGE_LOADING =
  "chatActionTypes/ADD_IMAGE_MESSAGE_LOADING";
export interface AddImageMessageLoadingAction {
  type: typeof ADD_IMAGE_MESSAGE_LOADING;
}

export const ADD_IMAGE_MESSAGE_SUCCESS =
  "chatActionTypes/ADD_IMAGE_MESSAGE_SUCCESS";
export interface AddImageMessageSuccessAction {
  type: typeof ADD_IMAGE_MESSAGE_SUCCESS;
}

export const ADD_IMAGE_MESSAGE_FAILURE =
  "chatActionTypes/ADD_IMAGE_MESSAGE_FAILURE";
export interface AddImageMessageFailureAction {
  type: typeof ADD_IMAGE_MESSAGE_FAILURE;
  message: String;
}

export type AddImageMessageActionType =
  | AddImageMessageAction
  | AddImageMessageLoadingAction
  | AddImageMessageFailureAction
  | AddImageMessageSuccessAction;
