import { all, fork } from "redux-saga/effects";
import LoginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([fork(LoginSaga)]);
}