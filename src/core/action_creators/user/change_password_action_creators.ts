import * as actions from "../../action_types/user/change_password_action_types";

export const changePassword = (
  phoneNumber: string,
  password: string
): actions.ChangePasswordAction => {
  return {
    type: actions.CHANGE_PASSWORD,
    payload: { phoneNumber, password },
  };
};

export const changePasswordLoading =
  (): actions.ChangePasswordLoadingAction => {
    return { type: actions.CHANGE_PASSWORD_LOADING };
  };

export const changePasswordSuccess = (
  result: boolean
): actions.ChangePasswordSuccessAction => {
  return { type: actions.CHANGE_PASSWORD_SUCCESS, payload: result };
};

export const changePasswordFailure = (
  message: string
): actions.ChangePasswordFailureAction => {
  return { type: actions.CHANGE_PASSWORD_FAILURE, message: message };
};

export const changePasswordClear = (): actions.ChangePasswordClearAction => {
  return { type: actions.CHANGE_PASSWORD_CLEAR };
};
