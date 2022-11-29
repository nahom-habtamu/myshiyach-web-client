import * as actions from "../../action_types/chat/get_conversations_by_user_action_types";

export const getConversationsByUser = (
  onSnapshotCallBack: Function,
  id: string
): actions.GetConversationsByUserAction => {
  return {
    type: actions.GET_CONVERSATIONS_BY_USER,
    payload: {
      onSnapshotCallBack,
      id,
    },
  };
};

export const getConversationsByUserLoading =
  (): actions.GetConversationsByUserLoadingAction => {
    return { type: actions.GET_CONVERSATIONS_BY_USER_LOADING };
  };

export const getConversationsByUserSuccess = (
  unsubscribe: Function
): actions.GetConversationsByUserSuccessAction => {
  return {
    type: actions.GET_CONVERSATIONS_BY_USER_SUCCESS,
    payload: unsubscribe,
  };
};

export const getConversationsByUserFailure = (
  message: string
): actions.GetConversationsByUserFailureAction => {
  return {
    type: actions.GET_CONVERSATIONS_BY_USER_FAILURE,
    message: message,
  };
};
