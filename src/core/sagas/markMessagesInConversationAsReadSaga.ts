import * as Effects from "redux-saga/effects";

import { markMessagesInConversationAsRead } from "../repositories/chat_repository";

import * as actionCreators from "../action_creators/chat/mark_messages_in_conversation_as_read_action_creators";
import * as actionTypes from "../action_types/chat/mark_messages_in_a_conversation_as_read_action_types";

const call: any = Effects.call;

function* onMarkMessagesInConversationAsRead(
  markMessagesAction: actionTypes.MarkMessagesInConversationAsReadAction
) {
  try {
    yield Effects.put(actionCreators.markMessagesInConversationAsReadLoading());
    yield call(
      markMessagesInConversationAsRead,
      markMessagesAction.payload.conversationId,
      markMessagesAction.payload.recieverId
    );
    yield Effects.put(actionCreators.markMessagesInConversationAsReadSuccess());
  } catch (error: any) {
    yield Effects.put(
      actionCreators.markMessagesInConversationAsReadFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnMarkMessagesInAConversationAsRead() {
  yield Effects.takeEvery(
    actionTypes.MARK_MESSAGES_IN_CONVERSATION_AS_READ,
    onMarkMessagesInConversationAsRead
  );
}

export default function* markMessagesInAConversationAsReadSaga() {
  yield Effects.all([Effects.fork(watchOnMarkMessagesInAConversationAsRead)]);
}
