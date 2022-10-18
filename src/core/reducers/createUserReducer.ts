import * as createUserActions from "../action_types/user/create_user_action_types";
import User from "../models/user";

export interface CreateUserState {
  user: User | null;
  error: String;
  isLoading: boolean;
}

const initialState: CreateUserState = {
  user: null,
  error: "",
  isLoading: false,
};

export default function createUserReducer(
  state: CreateUserState = initialState,
  action: createUserActions.CreateUserActionType
): CreateUserState {
  switch (action.type) {
    case createUserActions.CREATE_USER_LOADING:
      return {
        user: null,
        error: "",
        isLoading: true,
      };
    case createUserActions.CREATE_USER_FAILURE:
      return {
        user: null,
        error: action.message,
        isLoading: false,
      };
    case createUserActions.CREATE_USER_SUCCESS:
      return {
        user: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
