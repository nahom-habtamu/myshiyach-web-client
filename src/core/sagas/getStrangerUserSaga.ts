import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/chat/get_stranger_user_action_creators";
import * as actionTypes from "../action_types/chat/get_stranger_user_action_types";
import Conversation from "../models/chat/conversation";
import User from "../models/user/user";

import { getUserById } from "../repositories/user_repository";

const call: any = Effects.call;

function* onGetStrangerUser(
  getStrangerUserAction: actionTypes.GetStrangerUserAction
) {
  try {
    yield Effects.put(actionCreators.getStrangerUserLoading());
    let strangerUserId = getStrangerId(
      getStrangerUserAction.payload.conversation,
      getStrangerUserAction.payload.currentUserId
    );
    let user: User = yield call(getUserById, {
      token: getStrangerUserAction.payload.token,
      id: strangerUserId,
    });
    yield Effects.put(actionCreators.getStrangerUserSuccess(user));
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getStrangerUserFailure(error.response.data.error)
    );
  }
}

function getStrangerId(conversation: Conversation, currentUserId: string) {
  return conversation.memberOne === currentUserId
    ? conversation.memberTwo
    : conversation.memberOne;
}

function* watchOnGetStrangerUser() {
  yield Effects.takeEvery(actionTypes.GET_STRANGER_USER, onGetStrangerUser);
}

export default function* getStrangerUserSaga() {
  yield Effects.all([Effects.fork(watchOnGetStrangerUser)]);
}
