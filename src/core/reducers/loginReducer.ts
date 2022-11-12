import * as loginActions from "../action_types/auth/login_action_types";
import User from "../models/user/user";

export interface LoginState {
  result: {
    currentUser: User | null;
    token: string;
  };
  error: String;
  isLoading: boolean;
}

const initialState: LoginState = {
  result: {
    currentUser: null,
    token: "",
  },
  error: "",
  isLoading: false,
};

export default function loginReducer(
  state: LoginState = initialState,
  action: loginActions.LoginActionType
): LoginState {
  switch (action.type) {
    case loginActions.LOGIN_LOADING:
      return {
        result: {
          currentUser: null,
          token: "",
        },
        error: "",
        isLoading: true,
      };
    case loginActions.LOGIN_FAILURE:
      return {
        result: {
          currentUser: null,
          token: "",
        },
        error: action.message,
        isLoading: false,
      };
    case loginActions.LOGIN_SUCCESS:
      return {
        result: {
          currentUser: action.payload.currentUser,
          token: action.payload.loginResult.token as string,
        },
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
