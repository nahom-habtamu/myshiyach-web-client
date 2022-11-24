import * as actions from "../../action_types/chat/add_text_message_action_types";
import Message from "../../models/chat/message";

export const addTextMessage = ({
  conversationId,
  message,
}: {
  conversationId: string;
  message: Message;
}): actions.AddTextMessageAction => {
  return {
    type: actions.ADD_TEXT_MESSAGE,
    payload: {
      conversationId,
      message,
    },
  };
};

export const addTextMessageLoading =
  (): actions.AddTextMessageLoadingAction => {
    return { type: actions.ADD_TEXT_MESSAGE_LOADING };
  };

export const addTextMessageSuccess =
  (): actions.AddTextMessageSuccessAction => {
    return {
      type: actions.ADD_TEXT_MESSAGE_SUCCESS,
    };
  };

export const addTextMessageFailure = (
  message: string
): actions.AddTextMessageFailureAction => {
  return {
    type: actions.ADD_TEXT_MESSAGE_FAILURE,
    message: message,
  };
};
