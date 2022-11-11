import * as Effects from "redux-saga/effects";

import { getUserById } from "../repositories/user_repository";

import * as getUserByIdCreators from "../action_creators/user/get_user_by_id_action_creators";
import * as getUserByIdTypes from "../action_types/user/get_user_by_id_types";
import User from "../models/user/user";

const call: any = Effects.call;

function* onGetUserById(getUserByIdAction: getUserByIdTypes.GetUserByIdAction) {
  try {
    yield Effects.put(getUserByIdCreators.getUserByIdLoading());
    const data: User = yield call(getUserById, getUserByIdAction.payload);
    console.log(data);

    yield Effects.put(getUserByIdCreators.getUserByIdSuccess(data));
  } catch (error: any) {
    yield Effects.put(
      getUserByIdCreators.getUserByIdFailure(error.response.data.error)
    );
  }
}

function* watchOnGetUserById() {
  yield Effects.takeEvery(getUserByIdTypes.GET_USER_BY_ID, onGetUserById);
}

export default function* getUserByIdSaga() {
  yield Effects.all([Effects.fork(watchOnGetUserById)]);
}
