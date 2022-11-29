export const GET_CONVERSATIONS_BY_USER =
  "chatActionTypes/GET_CONVERSATIONS_BY_USER";
export interface GetConversationsByUserAction {
  type: typeof GET_CONVERSATIONS_BY_USER;
  payload: {
    onSnapshotCallBack: Function;
    id: string;
  };
}

export const GET_CONVERSATIONS_BY_USER_LOADING =
  "chatActionTypes/GET_CONVERSATIONS_BY_USER_LOADING";
export interface GetConversationsByUserLoadingAction {
  type: typeof GET_CONVERSATIONS_BY_USER_LOADING;
}

export const GET_CONVERSATIONS_BY_USER_SUCCESS =
  "chatActionTypes/GET_CONVERSATIONS_BY_USER_SUCCESS";
export interface GetConversationsByUserSuccessAction {
  type: typeof GET_CONVERSATIONS_BY_USER_SUCCESS;
  payload: Function;
}

export const GET_CONVERSATIONS_BY_USER_FAILURE =
  "chatActionTypes/GET_CONVERSATIONS_BY_USER_FAILURE";
export interface GetConversationsByUserFailureAction {
  type: typeof GET_CONVERSATIONS_BY_USER_FAILURE;
  message: String;
}

export type GetConversationsByUserActionType =
  | GetConversationsByUserAction
  | GetConversationsByUserLoadingAction
  | GetConversationsByUserFailureAction
  | GetConversationsByUserSuccessAction;
