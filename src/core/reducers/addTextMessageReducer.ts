import * as actions from "../action_types/chat/add_text_message_action_types";

export interface AddTextMessageState {
  sucessfull: boolean | null;
  error: String;
  isLoading: boolean;
}

const initialState: AddTextMessageState = {
  sucessfull: null,
  error: "",
  isLoading: false,
};

export default function addTextMessageReducer(
  state: AddTextMessageState = initialState,
  action: actions.AddTextMessageActionType
): AddTextMessageState {
  switch (action.type) {
    case actions.ADD_TEXT_MESSAGE_LOADING:
      return {
        sucessfull: null,
        error: "",
        isLoading: true,
      };
    case actions.ADD_TEXT_MESSAGE_FAILURE:
      return {
        sucessfull: null,
        error: action.message,
        isLoading: false,
      };
    case actions.ADD_TEXT_MESSAGE_SUCCESS:
      return {
        sucessfull: true,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
