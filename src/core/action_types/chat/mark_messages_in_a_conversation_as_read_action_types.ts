export const MARK_MESSAGES_IN_CONVERSATION_AS_READ =
  "chatActionTypes/MARK_MESSAGES_IN_CONVERSATION_AS_READ";
export interface MarkMessagesInConversationAsReadAction {
  type: typeof MARK_MESSAGES_IN_CONVERSATION_AS_READ;
  payload: {
    conversationId: string;
    recieverId: string;
  };
}

export const MARK_MESSAGES_IN_CONVERSATION_AS_READ_LOADING =
  "chatActionTypes/MARK_MESSAGES_IN_CONVERSATION_AS_READ_LOADING";
export interface MarkMessagesInConversationAsReadLoadingAction {
  type: typeof MARK_MESSAGES_IN_CONVERSATION_AS_READ_LOADING;
}

export const MARK_MESSAGES_IN_CONVERSATION_AS_READ_SUCCESS =
  "chatActionTypes/MARK_MESSAGES_IN_CONVERSATION_AS_READ_SUCCESS";
export interface MarkMessagesInConversationAsReadSuccessAction {
  type: typeof MARK_MESSAGES_IN_CONVERSATION_AS_READ_SUCCESS;
}

export const MARK_MESSAGES_IN_CONVERSATION_AS_READ_FAILURE =
  "chatActionTypes/MARK_MESSAGES_IN_CONVERSATION_AS_READ_FAILURE";
export interface MarkMessagesInConversationAsReadFailureAction {
  type: typeof MARK_MESSAGES_IN_CONVERSATION_AS_READ_FAILURE;
  message: String;
}

export type MarkMessagesInConversationAsReadActionType =
  | MarkMessagesInConversationAsReadAction
  | MarkMessagesInConversationAsReadLoadingAction
  | MarkMessagesInConversationAsReadFailureAction
  | MarkMessagesInConversationAsReadSuccessAction;
