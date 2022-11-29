import * as actions from "../../action_types/chat/go_to_chat_action_types";

export const goToChat = ({
  memberOne,
  memberTwo,
}: {
  memberOne: string;
  memberTwo: string;
}): actions.GoToChatAction => {
  return {
    type: actions.GO_TO_CHAT,
    payload: {
      memberOne,
      memberTwo,
    },
  };
};

export const goToChatLoading = (): actions.GoToChatLoadingAction => {
  return { type: actions.GO_TO_CHAT_LOADING };
};

export const goToChatSuccess = (id: string): actions.GoToChatSuccessAction => {
  return {
    type: actions.GO_TO_CHAT_SUCCESS,
    payload: id,
  };
};

export const goToChatFailure = (
  message: string
): actions.GoToChatFailureAction => {
  return {
    type: actions.GO_TO_CHAT_FAILURE,
    message: message,
  };
};

export const clearGoToChat = (): actions.ClearGoToChatAction => {
  return {
    type: actions.CLEAR_GO_TO_CHAT,
  };
};
