import * as actions from "../action_types/chat/mark_messages_in_a_conversation_as_read_action_types";

export interface MarkMessagesState {
  sucessfull: boolean | null;
  error: String;
  isLoading: boolean;
}

const initialState: MarkMessagesState = {
  sucessfull: null,
  error: "",
  isLoading: false,
};

export default function addTextMessageReducer(
  state: MarkMessagesState = initialState,
  action: actions.MarkMessagesInConversationAsReadActionType
): MarkMessagesState {
  switch (action.type) {
    case actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_LOADING:
      return {
        sucessfull: null,
        error: "",
        isLoading: true,
      };
    case actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_FAILURE:
      return {
        sucessfull: null,
        error: action.message,
        isLoading: false,
      };
    case actions.MARK_MESSAGES_IN_CONVERSATION_AS_READ_SUCCESS:
      return {
        sucessfull: true,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
