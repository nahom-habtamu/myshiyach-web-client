import * as actions from "../action_types/chat/go_to_chat_action_types";

export interface GoToChatState {
  conversationId: string | null;
  error: String;
  isLoading: boolean;
}

const initialState: GoToChatState = {
  conversationId: null,
  error: "",
  isLoading: false,
};

export default function goToChatReducer(
  state: GoToChatState = initialState,
  action: actions.GoToChatActionType
): GoToChatState {
  switch (action.type) {
    case actions.CLEAR_GO_TO_CHAT:
      return initialState;
    case actions.GO_TO_CHAT_LOADING:
      return {
        conversationId: null,
        error: "",
        isLoading: true,
      };
    case actions.GO_TO_CHAT_FAILURE:
      return {
        conversationId: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GO_TO_CHAT_SUCCESS:
      return {
        conversationId: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
