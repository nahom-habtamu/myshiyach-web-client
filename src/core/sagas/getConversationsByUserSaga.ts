import { Unsubscribe } from "firebase/firestore";
import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/chat/get_conversations_by_user_action_creators";
import * as actionTypes from "../action_types/chat/get_conversations_by_user_action_types";

import { getConversationSnapshotData } from "../repositories/chat_repository";

const call: any = Effects.call;

function* onGetConversationsByUser(
  getConversationsByUserAction: actionTypes.GetConversationsByUserAction
) {
  try {
    yield Effects.put(actionCreators.getConversationsByUserLoading());
    let unsubscribe: Unsubscribe = yield call(
      getConversationSnapshotData,
      getConversationsByUserAction.payload.onSnapshotCallBack,
      getConversationsByUserAction.payload.id
    );
    yield Effects.put(
      actionCreators.getConversationsByUserSuccess(unsubscribe)
    );
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getConversationsByUserFailure(error.response.data.error)
    );
  }
}

function* watchOnGetConversationsByUser() {
  yield Effects.takeEvery(
    actionTypes.GET_CONVERSATIONS_BY_USER,
    onGetConversationsByUser
  );
}

export default function* getConversationsByUserSaga() {
  yield Effects.all([Effects.fork(watchOnGetConversationsByUser)]);
}
