import { ConfirmationResult } from "firebase/auth";
import * as authPhoneActions from "../action_types/auth/authenticate_phone_number_types";

export interface AuthPhoneNumberState {
  result: ConfirmationResult | null;
  error: String;
  isLoading: boolean;
}

const initialState: AuthPhoneNumberState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function authPhoneNumberReducer(
  state: AuthPhoneNumberState = initialState,
  action: authPhoneActions.AuthPhoneNumberActionType
): AuthPhoneNumberState {
  switch (action.type) {
    case authPhoneActions.AUTH_PHONE_NUMBER_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case authPhoneActions.AUTH_PHONE_NUMBER_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case authPhoneActions.AUTH_PHONE_NUMBER_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
