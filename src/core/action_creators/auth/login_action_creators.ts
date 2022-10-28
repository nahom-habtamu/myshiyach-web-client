import LoginRequest from "../../models/auth/login_request";

import * as actions from "../../action_types/auth/login_action_types";
import LoginResult from "../../models/auth/login_result";

export const login = (loginRequest: LoginRequest): actions.LoginAction => {
  return {
    type: actions.LOGIN,
    payload: loginRequest,
  };
};

export const loginLoading = (): actions.LoginLoadingAction => {
  return { type: actions.LOGIN_LOADING };
};

export const loginSuccess = (
  loginResult: LoginResult
): actions.LoginSuccessAction => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: loginResult,
  };
};

export const loginFailure = (message: String): actions.LoginFailureAction => {
  return {
    type: actions.LOGIN_FAILURE,
    message: message,
  };
};
