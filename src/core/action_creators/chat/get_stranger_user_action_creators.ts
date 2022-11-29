import * as actions from "../../action_types/chat/get_stranger_user_action_types";
import Conversation from "../../models/chat/conversation";
import User from "../../models/user/user";

export const getStrangerUser = ({
  currentUserId,
  conversation,
  token,
}: {
  currentUserId: string;
  token: string;
  conversation: Conversation;
}): actions.GetStrangerUserAction => {
  return {
    type: actions.GET_STRANGER_USER,
    payload: {
      currentUserId,
      conversation,
      token,
    },
  };
};

export const getStrangerUserLoading =
  (): actions.GetStrangerUserLoadingAction => {
    return { type: actions.GET_STRANGER_USER_LOADING };
  };

export const getStrangerUserSuccess = (
  user: User
): actions.GetStrangerUserSuccessAction => {
  return {
    type: actions.GET_STRANGER_USER_SUCCESS,
    payload: user,
  };
};

export const getStrangerUserFailure = (
  message: string
): actions.GetStrangerUserFailureAction => {
  return {
    type: actions.GET_STRANGER_USER_FAILURE,
    message: message,
  };
};
