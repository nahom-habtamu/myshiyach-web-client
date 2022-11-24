import * as actions from "../../action_types/chat/get_chat_detail_action_types";
import Conversation from "../../models/chat/conversation";
import User from "../../models/user/user";

export const getChatDetail = ({
  conversationId,
  currentUserId,
  token,
}: {
  conversationId: string;
  currentUserId: string;
  token: string;
}): actions.GetChatDetailAction => {
  return {
    type: actions.GET_CHAT_DETAIL,
    payload: {
      conversationId,
      currentUserId,
      token,
    },
  };
};

export const getChatDetailLoading = (): actions.GetChatDetailLoadingAction => {
  return { type: actions.GET_CHAT_DETAIL_LOADING };
};

export const getChatDetailSuccess = (
  conversation: Conversation,
  strangerUser: User
): actions.GetChatDetailSuccessAction => {
  return {
    type: actions.GET_CHAT_DETAIL_SUCCESS,
    payload: { conversation, strangerUser },
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
