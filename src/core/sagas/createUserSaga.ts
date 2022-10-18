import * as Effects from "redux-saga/effects";

import { registerUser } from "../repositories/user_repository";

import * as createUserCreators from "../action_creators/user/create_user_action_creators";
import * as createUserTypes from "../action_types/user/create_user_action_types";
import User from "../models/user";

const call: any = Effects.call;

function* onCreateUser(createUser: createUserTypes.CreateUserAction) {
  try {
    yield Effects.put(createUserCreators.createUserLoading());
    const data: User = yield call(registerUser, createUser.payload);
    yield Effects.put(createUserCreators.createUserSuccess(data));
  } catch (error: any) {
    yield Effects.put(
      createUserCreators.createUserFailure(error.response.data.error)
    );
  }
}

function* watchOnCreateUser() {
  yield Effects.takeEvery(createUserTypes.CREATE_USER, onCreateUser);
}

export default function* createUserSaga() {
  yield Effects.all([Effects.fork(watchOnCreateUser)]);
}
