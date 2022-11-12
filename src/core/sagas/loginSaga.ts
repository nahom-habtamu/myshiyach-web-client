import * as Effects from "redux-saga/effects";

import { login } from "../repositories/auth_repository";
import { getUserById } from "../repositories/user_repository";

import * as loginActionCreators from "../action_creators/auth/login_action_creators";
import * as loginActionTypes from "../action_types/auth/login_action_types";
import LoginResult from "../models/auth/login_result";
import decodeAuthToken from "../utils/decodeAuthToken";
import User from "../models/user/user";

const call: any = Effects.call;

function* onLogin(loginAction: loginActionTypes.LoginAction) {
  try {
    yield Effects.put(loginActionCreators.loginLoading());
    const loginResult: LoginResult = yield call(login, loginAction.payload);
    const decodedTokenResult = decodeAuthToken(loginResult.token as string);
    const currentUser: User = yield call(getUserById, {
      id: decodedTokenResult.sub,
      token: loginResult.token,
    });
    yield Effects.put(
      loginActionCreators.loginSuccess(loginResult, currentUser)
    );
  } catch (error: any) {
    yield Effects.put(
      loginActionCreators.loginFailure(error.response.data.error)
    );
  }
}

function* watchOnLogin() {
  yield Effects.takeEvery(loginActionTypes.LOGIN, onLogin);
}

export default function* loginSaga() {
  yield Effects.all([Effects.fork(watchOnLogin)]);
}
