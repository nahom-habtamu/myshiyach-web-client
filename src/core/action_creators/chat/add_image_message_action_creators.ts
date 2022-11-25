import * as actions from "../../action_types/chat/add_image_message_action_types";
import Message from "../../models/chat/message";

export const addImageMessage = ({
  conversationId,
  message,
  image,
}: {
  conversationId: string;
  message: Message;
  image: File;
}): actions.AddImageMessageAction => {
  return {
    type: actions.ADD_IMAGE_MESSAGE,
    payload: {
      conversationId,
      message,
      image,
    },
  };
};

export const addImageMessageLoading =
  (): actions.AddImageMessageLoadingAction => {
    return { type: actions.ADD_IMAGE_MESSAGE_LOADING };
  };

export const addImageMessageSuccess =
  (): actions.AddImageMessageSuccessAction => {
    return {
      type: actions.ADD_IMAGE_MESSAGE_SUCCESS,
    };
  };

export const addImageMessageFailure = (
  message: string
): actions.AddImageMessageFailureAction => {
  return {
    type: actions.ADD_IMAGE_MESSAGE_FAILURE,
    message: message,
  };
};
