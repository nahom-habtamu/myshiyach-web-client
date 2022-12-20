import * as actions from "../action_types/chat/get_conversations_with_stranger_info_by_user_action_types";

export interface GetConversationsByUserState {
  unsubscribe: Function | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetConversationsByUserState = {
  unsubscribe: null,
  error: "",
  isLoading: false,
};

export default function getConversationsByUserReducer(
  state: GetConversationsByUserState = initialState,
  action: actions.GetConversationsWithStrangerInfoByUserActionType
): GetConversationsByUserState {
  switch (action.type) {
    case actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_LOADING:
      return {
        unsubscribe: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_FAILURE:
      return {
        unsubscribe: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER_SUCCESS:
      return {
        unsubscribe: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
