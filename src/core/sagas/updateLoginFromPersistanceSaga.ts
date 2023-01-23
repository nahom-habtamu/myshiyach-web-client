import * as Effects from "redux-saga/effects";

import { getUserFromSession, saveUserToSession } from "../repositories/auth_repository";

import * as actionCreators from "../action_creators/auth/login_action_creators";
import * as actionTypes from "../action_types/auth/login_action_types";
import LoginResult from "../models/auth/login_result";
import User from "../models/user/user";
import { getUserById } from "../repositories/user_repository";

const call: any = Effects.call;

function* onUpdateLoginFromPersistence() {
  try {
    yield Effects.put(actionCreators.loginLoading());
    const result: {
      currentUser: User;
      loginResult: LoginResult;
    } | null = yield call(getUserFromSession);

    if (result == null) {
      yield Effects.put(
        actionCreators.loginFailure("No saved user login data")
      );
    } else {

      const currentUser: User = yield call(getUserById, {
        id: result.currentUser._id,
        token: result.loginResult.token,
      });
      yield call(saveUserToSession, result!.loginResult, currentUser);
      yield Effects.put(
        actionCreators.loginSuccess(result!.loginResult, currentUser)
      );
    }
  } catch (error: any) {
    yield Effects.put(actionCreators.loginFailure(error.response.data.error));
  }
}

function* watchOnUpdateLoginFromPersistence() {
  yield Effects.takeEvery(
    actionTypes.LOGIN_UPDATE_FROM_PERSISTENCE,
    onUpdateLoginFromPersistence
  );
}

export default function* watchOnUpdateLoginFromPersistenceSaga() {
  yield Effects.all([Effects.fork(watchOnUpdateLoginFromPersistence)]);
}
