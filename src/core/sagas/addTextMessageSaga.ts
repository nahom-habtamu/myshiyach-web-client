import * as Effects from "redux-saga/effects";

import { addMessageToConversation } from "../repositories/chat_repository";

import * as actionCreators from "../action_creators/chat/add_text_message_action_creators";
import * as actionTypes from "../action_types/chat/add_text_message_action_types";

const call: any = Effects.call;

function* onAddTextMessage(
  addTextMessageAction: actionTypes.AddTextMessageAction
) {
  try {
    yield Effects.put(actionCreators.addTextMessageLoading());

    yield call(
      addMessageToConversation,
      addTextMessageAction.payload.conversationId,
      addTextMessageAction.payload.message
    );

    yield Effects.put(actionCreators.addTextMessageSuccess());
  } catch (error: any) {
    yield Effects.put(
      actionCreators.addTextMessageFailure(error.response.data.error)
    );
  }
}

function* watchOnAddTextMessage() {
  yield Effects.takeEvery(actionTypes.ADD_TEXT_MESSAGE, onAddTextMessage);
}

export default function* addTextMessageSaga() {
  yield Effects.all([Effects.fork(watchOnAddTextMessage)]);
}
