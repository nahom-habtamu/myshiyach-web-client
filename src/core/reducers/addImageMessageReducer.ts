import * as actions from "../action_types/chat/add_image_message_action_types";

export interface AddImageMessageState {
  sucessfull: boolean | null;
  error: String;
  isLoading: boolean;
}

const initialState: AddImageMessageState = {
  sucessfull: null,
  error: "",
  isLoading: false,
};

export default function addImageMessageReducer(
  state: AddImageMessageState = initialState,
  action: actions.AddImageMessageActionType
): AddImageMessageState {
  switch (action.type) {
    case actions.ADD_IMAGE_MESSAGE_LOADING:
      return {
        sucessfull: null,
        error: "",
        isLoading: true,
      };
    case actions.ADD_IMAGE_MESSAGE_FAILURE:
      return {
        sucessfull: null,
        error: action.message,
        isLoading: false,
      };
    case actions.ADD_IMAGE_MESSAGE_SUCCESS:
      return {
        sucessfull: true,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
