import * as Effects from "redux-saga/effects";

import { login } from '../repositories/auth_repository';

import * as loginActionCreators from '../action_creators/auth/login_action_creators';
import * as loginActionTypes from '../action_types/auth/login_action_types';
import LoginResult from "../models/LoginResult";

const call: any = Effects.call;

function* onLogin(loginAction: loginActionTypes.LoginAction) {
    try {
        yield Effects.put(loginActionCreators.loginLoading());
        const data : LoginResult = yield call(login, loginAction.payload);
        yield Effects.put(loginActionCreators.loginSuccess(data));
    } catch (error: any) {
        yield Effects.put(loginActionCreators.loginFailure(error.response.data.error));
    }
}

function* watchOnLogin() {
    yield Effects.takeEvery(loginActionTypes.LOGIN, onLogin);
}

export default function* lyricsSaga() {
    yield Effects.all([Effects.fork(watchOnLogin)]);
}