import * as actions from "../action_types/chat/get_conversations_by_user_action_types";
import Conversation from "../models/chat/conversation";

export interface GetConversationsByUserState {
  result: Conversation[] | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetConversationsByUserState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getConversationsByUserReducer(
  state: GetConversationsByUserState = initialState,
  action: actions.GetConversationsByUserActionType
): GetConversationsByUserState {
  switch (action.type) {
    case actions.GET_CONVERSATIONS_BY_USER_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_CONVERSATIONS_BY_USER_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_CONVERSATIONS_BY_USER_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
