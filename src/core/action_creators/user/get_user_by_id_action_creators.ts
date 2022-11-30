import * as actions from "../../action_types/user/get_user_by_id_types";
import User from "../../models/user/user";

export const getUserById = (
  id: string,
  token: string
): actions.GetUserByIdAction => {
  return {
    type: actions.GET_USER_BY_ID,
    payload: {
      id,
      token,
    },
  };
};

export const getUserByIdLoading = (): actions.GetUserByIdLoadingAction => {
  return { type: actions.GET_USER_BY_ID_LOADING };
};

export const getUserByIdSuccess = (
  user: User
): actions.GetUserByIdSuccessAction => {
  return { type: actions.GET_USER_BY_ID_SUCCESS, payload: user };
};

export const getUserByIdFailure = (
  message: string
): actions.GetUserByIdFailureAction => {
  return { type: actions.GET_USER_BY_ID_FAILURE, message: message };
};

export const clearGetUserById = (): actions.ClearGetUserByIdAction => {
  return { type: actions.CLEAR_GET_USER_BY_ID };
};
