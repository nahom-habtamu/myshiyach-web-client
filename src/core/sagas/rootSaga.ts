import { all, fork } from "redux-saga/effects";
import LoginSaga from "./loginSaga";
import AuthPhoneNumberSaga from "./authPhoneNumberSaga";
import VerifyPinSaga from "./verifyPinSaga";
import CreateUserSaga from "./createUserSaga";
import DisplayPaginatedProductsSaga from "./displayPaginatedProductsSaga";
import LoadMoreProductsSaga from "./loadMoreProductsSaga";

export default function* rootSaga() {
  yield all([fork(LoginSaga)]);
  yield all([fork(AuthPhoneNumberSaga)]);
  yield all([fork(VerifyPinSaga)]);
  yield all([fork(CreateUserSaga)]);
  yield all([fork(DisplayPaginatedProductsSaga)]);
  yield all([fork(LoadMoreProductsSaga)]);
}
