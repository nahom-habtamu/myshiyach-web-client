import * as actions from "../action_types/chat/go_to_chat_action_types";

export interface GoToChatState {
  sucessfull: string | null;
  error: String;
  isLoading: boolean;
}

const initialState: GoToChatState = {
  sucessfull: null,
  error: "",
  isLoading: false,
};

export default function goToChatReducer(
  state: GoToChatState = initialState,
  action: actions.GoToChatActionType
): GoToChatState {
  switch (action.type) {
    case actions.GO_TO_CHAT_LOADING:
      return {
        sucessfull: null,
        error: "",
        isLoading: true,
      };
    case actions.GO_TO_CHAT_FAILURE:
      return {
        sucessfull: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GO_TO_CHAT_SUCCESS:
      return {
        sucessfull: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
