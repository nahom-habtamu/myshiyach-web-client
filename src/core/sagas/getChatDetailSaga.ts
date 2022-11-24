import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/chat/get_chat_detail_action_creators";
import * as actionTypes from "../action_types/chat/get_chat_detail_action_types";
import Conversation from "../models/chat/conversation";
import User from "../models/user/user";

import { getConversationById } from "../repositories/chat_repository";
import { getUserById } from "../repositories/user_repository";

const call: any = Effects.call;

function* onGetChatDetail(
  getChatDetailAction: actionTypes.GetChatDetailAction
) {
  try {
    yield Effects.put(actionCreators.getChatDetailLoading());

    const conversation: Conversation = yield call(
      getConversationById,
      getChatDetailAction.payload.conversationId
    );
    const strangerId = getStrangerId(
      conversation,
      getChatDetailAction.payload.currentUserId
    );
    const strangerUser: User = yield call(getUserById, {
      id: strangerId,
      token: getChatDetailAction.payload.token,
    });
    yield Effects.put(
      actionCreators.getChatDetailSuccess(conversation, strangerUser)
    );
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getChatDetailFailure(error.response.data.error)
    );
  }
}

function getStrangerId(conversation: Conversation, currentUserId: string) {
  return conversation.memberOne === currentUserId
    ? conversation.memberTwo
    : conversation.memberOne;
}

function* watchOnGetChatDetail() {
  yield Effects.takeEvery(actionTypes.GET_CHAT_DETAIL, onGetChatDetail);
}

export default function* getChatDetailSaga() {
  yield Effects.all([Effects.fork(watchOnGetChatDetail)]);
}
