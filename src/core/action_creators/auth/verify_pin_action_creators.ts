import * as actions from "../../action_types/auth/verify_pin_action_types";
import VerifyPinRequest from "../../models/verify_pin_request";

export const verifyPin = (
  verifyPinRequest: VerifyPinRequest
): actions.VerifyPinAction => {
  return {
    type: actions.VERIFY_PIN,
    payload: verifyPinRequest,
  };
};

export const verifyPinLoading = (): actions.VerifyPinLoadingAction => {
  return { type: actions.VERIFY_PIN_LOADING };
};

export const verifyPinSuccess = (): actions.VerifyPinSuccessAction => {
  return { type: actions.VERIFY_PIN_SUCCESS };
};

export const verifyPinFailure = (
  message: string
): actions.VerifyPinFailureAction => {
  return { type: actions.VERIFY_PIN_FAILURE, message: message };
};
