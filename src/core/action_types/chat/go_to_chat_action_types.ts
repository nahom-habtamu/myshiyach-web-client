export const GO_TO_CHAT = "chatActionTypes/GO_TO_CHAT";
export interface GoToChatAction {
  type: typeof GO_TO_CHAT;
  payload: {
    memberOne: string;
    memberTwo: string;
  };
}

export const CLEAR_GO_TO_CHAT = "chatActionTypes/CLEAR_GO_TO_CHAT";
export interface ClearGoToChatAction {
  type: typeof CLEAR_GO_TO_CHAT;
}

export const GO_TO_CHAT_LOADING = "chatActionTypes/GO_TO_CHAT_LOADING";
export interface GoToChatLoadingAction {
  type: typeof GO_TO_CHAT_LOADING;
}

export const GO_TO_CHAT_SUCCESS = "chatActionTypes/GO_TO_CHAT_SUCCESS";
export interface GoToChatSuccessAction {
  type: typeof GO_TO_CHAT_SUCCESS;
  payload: string;
}

export const GO_TO_CHAT_FAILURE = "chatActionTypes/GO_TO_CHAT_FAILURE";
export interface GoToChatFailureAction {
  type: typeof GO_TO_CHAT_FAILURE;
  message: String;
}

export type GoToChatActionType =
  | GoToChatAction
  | GoToChatLoadingAction
  | GoToChatFailureAction
  | GoToChatSuccessAction
  | ClearGoToChatAction;
