import { ConfirmationResult } from "firebase/auth";
import * as actions from "../../action_types/auth/authenticate_phone_number_types";
import AuthPhoneNumberRequest from "../../models/auth/auth_phone_number_request";

export const authenticatePhoneNumber = (
  authPhoneRequest: AuthPhoneNumberRequest
): actions.AuthPhoneNumberAction => {
  return {
    type: actions.AUTH_PHONE_NUMBER,
    payload: authPhoneRequest,
  };
};

export const authenticatePhoneNumberLoading =
  (): actions.AuthPhoneNumberLoadingAction => {
    return { type: actions.AUTH_PHONE_NUMBER_LOADING };
  };

export const authenticatePhoneNumberSuccess = (
  result: ConfirmationResult
): actions.AuthPhoneNumberSuccessAction => {
  return { type: actions.AUTH_PHONE_NUMBER_SUCCESS, payload: result };
};

export const authenticatePhoneNumberFailure = (
  message: string
): actions.AuthPhoneNumberFailureAction => {
  return { type: actions.AUTH_PHONE_NUMBER_FAILURE, message: message };
};
