import { Unsubscribe } from "firebase/firestore";
import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/chat/get_chat_detail_action_creators";
import * as actionTypes from "../action_types/chat/get_chat_detail_action_types";

import { getConversationSnapshotById } from "../repositories/chat_repository";

const call: any = Effects.call;

function* onGetChatDetail(
  getChatDetailAction: actionTypes.GetChatDetailAction
) {
  try {
    yield Effects.put(actionCreators.getChatDetailLoading());

    let unsubscribe: Unsubscribe = yield call(
      getConversationSnapshotById,
      getChatDetailAction.payload.onSnapshotCallBack,
      getChatDetailAction.payload.conversationId
    );
    yield Effects.put(actionCreators.getChatDetailSuccess(unsubscribe));
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getChatDetailFailure(error.response.data.error)
    );
  }
}

function* watchOnGetChatDetail() {
  yield Effects.takeEvery(actionTypes.GET_CHAT_DETAIL, onGetChatDetail);
}

export default function* getChatDetailSaga() {
  yield Effects.all([Effects.fork(watchOnGetChatDetail)]);
}
