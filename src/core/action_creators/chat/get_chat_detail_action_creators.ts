import * as actions from "../../action_types/chat/get_chat_detail_action_types";

export const getChatDetail = ({
  conversationId,
  onSnapshotCallBack
}: {
  conversationId: string;
  onSnapshotCallBack: Function;
}): actions.GetChatDetailAction => {
  return {
    type: actions.GET_CHAT_DETAIL,
    payload: {
      conversationId,
      onSnapshotCallBack,
    },
  };
};

export const getChatDetailLoading = (): actions.GetChatDetailLoadingAction => {
  return { type: actions.GET_CHAT_DETAIL_LOADING };
};

export const getChatDetailSuccess = (
  unsubscribe: Function
): actions.GetChatDetailSuccessAction => {
  return {
    type: actions.GET_CHAT_DETAIL_SUCCESS,
    payload: unsubscribe,
  };
};

export const getChatDetailFailure = (
  message: string
): actions.GetChatDetailFailureAction => {
  return {
    type: actions.GET_CHAT_DETAIL_FAILURE,
    message: message,
  };
};
