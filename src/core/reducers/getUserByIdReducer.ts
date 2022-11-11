import * as getUserByIdActions from "../action_types/user/get_user_by_id_types";
import User from "../models/user/user";

export interface GetUserByIdState {
  user: User | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetUserByIdState = {
  user: null,
  error: "",
  isLoading: false,
};

export default function createUserReducer(
  state: GetUserByIdState = initialState,
  action: getUserByIdActions.GetUserByIdActionType
): GetUserByIdState {
  switch (action.type) {
    case getUserByIdActions.GET_USER_BY_ID_LOADING:
      return {
        user: null,
        error: "",
        isLoading: true,
      };
    case getUserByIdActions.GET_USER_BY_ID_FAILURE:
      return {
        user: null,
        error: action.message,
        isLoading: false,
      };
    case getUserByIdActions.GET_USER_BY_ID_SUCCESS:
      return {
        user: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
