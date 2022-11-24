import * as actions from "../action_types/chat/get_chat_detail_action_types";
import Conversation from "../models/chat/conversation";
import User from "../models/user/user";

export interface GetChatDetailState {
  result: {
    conversation: Conversation;
    strangerUser: User;
  } | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetChatDetailState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getDataNeededToAddPostReducer(
  state: GetChatDetailState = initialState,
  action: actions.GetChatDetailActionType
): GetChatDetailState {
  switch (action.type) {
    case actions.GET_CHAT_DETAIL_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_CHAT_DETAIL_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_CHAT_DETAIL_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
