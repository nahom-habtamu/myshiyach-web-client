import * as actions from "../../action_types/chat/mark_messages_in_a_conversation_as_read_action_types";

export const markMessagesInConversationAsRead = ({
  conversationId,
  recieverId,
}: {
  conversationId: string;
  recieverId: string;
}): actions.MarkMessagesInConversationAsReadAction => {
  return {
    type: actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ,
    payload: {
      conversationId,
      recieverId,
    },
  };
};

export const markMessagesInConversationAsReadLoading =
  (): actions.MarkMessagesInConversationAsReadLoadingAction => {
    return { type: actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_LOADING };
  };

export const markMessagesInConversationAsReadSuccess =
  (): actions.MarkMessagesInConversationAsReadSuccessAction => {
    return {
      type: actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_SUCCESS,
    };
  };

export const markMessagesInConversationAsReadFailure = (
  message: string
): actions.MarkMessagesInConversationAsReadFailureAction => {
  return {
    type: actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_FAILURE,
    message: message,
  };
};
