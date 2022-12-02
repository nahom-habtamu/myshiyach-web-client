import * as actions from "../action_types/user/change_password_action_types";

export interface ChangePasswordState {
  result: boolean | null;
  error: String;
  isLoading: boolean;
}

const initialState: ChangePasswordState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function changePasswordReducer(
  state: ChangePasswordState = initialState,
  action: actions.ChangePasswordActionType
): ChangePasswordState {
  switch (action.type) {
    case actions.CHANGE_PASSWORD_CLEAR:
      return initialState;
    case actions.CHANGE_PASSWORD_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case actions.CHANGE_PASSWORD_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case actions.CHANGE_PASSWORD_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
