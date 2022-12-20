export const GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER =
  "chatActionTypes/GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER";
export interface GetConversationsWithStrangerInfoByUserAction {
  type: typeof GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER;
  payload: {
    onSnapshotCallBack: Function;
    id: string;
    token: string;
  };
}

export const GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_LOADING =
  "chatActionTypes/GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_LOADING";
export interface GetConversationsWithStrangerInfoByUserLoadingAction {
  type: typeof GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_LOADING;
}

export const GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_SUCCESS =
  "chatActionTypes/GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_SUCCESS";
export interface GetConversationsWithStrangerInfoByUserSuccessAction {
  type: typeof GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_SUCCESS;
  payload: Function;
}

export const GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_FAILURE =
  "chatActionTypes/GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_FAILURE";
export interface GetConversationsWithStrangerInfoByUserFailureAction {
  type: typeof GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_FAILURE;
  message: String;
}

export type GetConversationsWithStrangerInfoByUserActionType =
  | GetConversationsWithStrangerInfoByUserAction
  | GetConversationsWithStrangerInfoByUserLoadingAction
  | GetConversationsWithStrangerInfoByUserFailureAction
  | GetConversationsWithStrangerInfoByUserSuccessAction;
