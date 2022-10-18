import * as loginActions from "../action_types/auth/login_action_types";

export interface LoginState {
  token: String;
  error: String;
  isLoading: boolean;
}

const initialState: LoginState = {
  token: "",
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
        token: "",
        error: "",
        isLoading: true,
      };
    case loginActions.LOGIN_FAILURE:
      return {
        token: "",
        error: action.message,
        isLoading: false,
      };
    case loginActions.LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
