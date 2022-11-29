import * as actions from "../action_types/chat/get_stranger_user_action_types";
import User from "../models/user/user";

export interface GetStrangerUserState {
  user: User | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetStrangerUserState = {
  user: null,
  error: "",
  isLoading: false,
};

export default function getChatDetailReducer(
  state: GetStrangerUserState = initialState,
  action: actions.GetStrangerUserActionType
): GetStrangerUserState {
  switch (action.type) {
    case actions.GET_STRANGER_USER_LOADING:
      return {
        user: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_STRANGER_USER_FAILURE:
      return {
        user: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_STRANGER_USER_SUCCESS:
      return {
        user: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
