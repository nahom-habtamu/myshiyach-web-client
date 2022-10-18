import * as verifyPinActions from "../action_types/auth/verify_pin_action_types";

export interface VerifyPinState {
  successfull: boolean;
  error: String;
  isLoading: boolean;
}

const initialState: VerifyPinState = {
  successfull: false,
  error: "",
  isLoading: false,
};

export default function verifyPinReducer(
  state: VerifyPinState = initialState,
  action: verifyPinActions.VerifyPinActionType
): VerifyPinState {
  switch (action.type) {
    case verifyPinActions.VERIFY_PIN_LOADING:
      return {
        successfull: false,
        error: "",
        isLoading: true,
      };
    case verifyPinActions.VERIFY_PIN_FAILURE:
      return {
        successfull: false,
        error: action.message,
        isLoading: false,
      };
    case verifyPinActions.VERIFY_PIN_SUCCESS:
      return {
        successfull: true,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
