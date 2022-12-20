import * as actions from "../../action_types/chat/get_conversations_with_stranger_info_by_user_action_types";

export const getConversationsWithStrangerInfoByUser = (
  onSnapshotCallBack: Function,
  id: string,
  token: string
): actions.GetConversationsWithStrangerInfoByUserAction => {
  return {
    type: actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER,
    payload: {
      onSnapshotCallBack,
      id,
      token,
    },
  };
};

export const getConversationsWithStrangerInfoByUserLoading =
  (): actions.GetConversationsWithStrangerInfoByUserLoadingAction => {
    return { type: actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_LOADING };
  };

export const getConversationsWithStrangerInfoByUserSuccess = (
  unsubscribe: Function
): actions.GetConversationsWithStrangerInfoByUserSuccessAction => {
  return {
    type: actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_SUCCESS,
    payload: unsubscribe,
  };
};

export const getConversationsWithStrangerInfoByUserFailure = (
  message: string
): actions.GetConversationsWithStrangerInfoByUserFailureAction => {
  return {
    type: actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_FAILURE,
    message: message,
  };
};
