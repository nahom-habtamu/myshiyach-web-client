import * as actions from "../../action_types/user/create_user_action_types";
import SignUpRequest from "../../models/user/signup_request";
import User from "../../models/user/user";

export const createUser = (
  SignUpRequest: SignUpRequest
): actions.CreateUserAction => {
  return {
    type: actions.CREATE_USER,
    payload: SignUpRequest,
  };
};

export const createUserLoading = (): actions.CreateUserLoadingAction => {
  return { type: actions.CREATE_USER_LOADING };
};

export const createUserSuccess = (
  user: User
): actions.CreateUserSuccessAction => {
  return { type: actions.CREATE_USER_SUCCESS, payload: user };
};

export const createUserFailure = (
  message: string
): actions.CreateUserFailureAction => {
  return { type: actions.CREATE_USER_FAILURE, message: message };
};
