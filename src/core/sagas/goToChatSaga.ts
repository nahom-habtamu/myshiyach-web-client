import * as Effects from "redux-saga/effects";

import {
  getConversationByMembers,
  createConversation,
} from "../repositories/chat_repository";

import * as actionCreators from "../action_creators/chat/go_to_chat_action_creators";
import * as actionTypes from "../action_types/chat/go_to_chat_action_types";

const call: any = Effects.call;

function* onGoToChat(goToChatAction: actionTypes.GoToChatAction) {
  try {
    yield Effects.put(actionCreators.goToChatLoading());

    let conversationId: string = yield call(
      getConversationByMembers,
      goToChatAction.payload.memberOne,
      goToChatAction.payload.memberTwo
    );
    if (conversationId == null) {
      let newConvId: string = yield call(
        createConversation,
        goToChatAction.payload.memberOne,
        goToChatAction.payload.memberTwo
      );
      yield Effects.put(actionCreators.goToChatSuccess(newConvId));
    } else {
      yield Effects.put(actionCreators.goToChatSuccess(conversationId));
    }
  } catch (error: any) {
    yield Effects.put(
      actionCreators.goToChatFailure(error.response.data.error)
    );
  }
}

function* watchOnGoToChat() {
  yield Effects.takeEvery(actionTypes.GO_TO_CHAT, onGoToChat);
}

export default function* goToChatSaga() {
  yield Effects.all([Effects.fork(watchOnGoToChat)]);
}
