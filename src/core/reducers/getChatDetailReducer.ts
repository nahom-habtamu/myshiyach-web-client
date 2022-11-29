import * as actions from "../action_types/chat/get_chat_detail_action_types";

export interface GetChatDetailState {
  unsubscribe: Function | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetChatDetailState = {
  unsubscribe: null,
  error: "",
  isLoading: false,
};

export default function getChatDetailReducer(
  state: GetChatDetailState = initialState,
  action: actions.GetChatDetailActionType
): GetChatDetailState {
  switch (action.type) {
    case actions.GET_CHAT_DETAIL_LOADING:
      return {
        unsubscribe: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_CHAT_DETAIL_FAILURE:
      return {
        unsubscribe: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_CHAT_DETAIL_SUCCESS:
      return {
        unsubscribe: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
