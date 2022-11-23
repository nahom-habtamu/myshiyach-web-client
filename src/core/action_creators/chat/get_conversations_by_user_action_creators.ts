import * as actions from "../../action_types/chat/get_conversations_by_user_action_types";
import Conversation from "../../models/chat/conversation";

export const getConversationsByUser = (
  id: string
): actions.GetConversationsByUserAction => {
  return {
    type: actions.GET_CONVERSATIONS_BY_USER,
    payload: id,
  };
};

export const getConversationsByUserLoading =
  (): actions.GetConversationsByUserLoadingAction => {
    return { type: actions.GET_CONVERSATIONS_BY_USER_LOADING };
  };

export const getConversationsByUserSuccess = ({
  conversations,
}: {
  conversations: Conversation[];
}): actions.GetConversationsByUserSuccessAction => {
  return {
    type: actions.GET_CONVERSATIONS_BY_USER_SUCCESS,
    payload: conversations,
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
