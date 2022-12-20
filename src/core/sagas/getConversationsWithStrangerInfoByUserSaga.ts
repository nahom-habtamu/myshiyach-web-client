import { Unsubscribe } from "firebase/firestore";
import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/chat/get_conversations_with_stranger_info_by_user_action_creators";
import * as actionTypes from "../action_types/chat/get_conversations_with_stranger_info_by_user_action_types";

import { getAllConversationsSnapshotData } from "../repositories/chat_repository";

const call: any = Effects.call;

function* onGetConversationsByUser(
  getConversationsByUserAction: actionTypes.GetConversationsWithStrangerInfoByUserAction
) {
  try {
    yield Effects.put(actionCreators.getConversationsWithStrangerInfoByUserLoading());
    let unsubscribe: Unsubscribe = yield call(
      getAllConversationsSnapshotData,
      getConversationsByUserAction.payload.onSnapshotCallBack,
      getConversationsByUserAction.payload.id,
      getConversationsByUserAction.payload.token,
    );

    yield Effects.put(
      actionCreators.getConversationsWithStrangerInfoByUserSuccess(unsubscribe)
    );
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getConversationsWithStrangerInfoByUserFailure(error.response.data.error)
    );
  }
}

function* watchOnGetConversationsByUser() {
  yield Effects.takeEvery(
    actionTypes.GET_CONVERSATIONS_WITH_STRANGER_INFO_BY_USER,
    onGetConversationsByUser
  );
}

export default function* getConversationsByUserSaga() {
  yield Effects.all([Effects.fork(watchOnGetConversationsByUser)]);
}
