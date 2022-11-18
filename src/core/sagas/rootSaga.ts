import { all, fork } from "redux-saga/effects";
import LoginSaga from "./loginSaga";
import AuthPhoneNumberSaga from "./authPhoneNumberSaga";
import VerifyPinSaga from "./verifyPinSaga";
import CreateUserSaga from "./createUserSaga";
import DisplayPaginatedProductsSaga from "./displayPaginatedProductsSaga";
import LoadMoreProductsSaga from "./loadMoreProductsSaga";
import GetUserByIdSaga from "./getUserByIdSaga";
import GetRecommendedProductsSaga from "./getRecommendedProductsSaga";
import RefreshProductSaga from "./refreshProductSaga";
import GetProductDetailSaga from "./getProductDetailSaga";
import CreateProductSaga from "./createProductSaga";
import GetDataNeededToAddPostSaga from "./getDataNeededToAddPostSaga";

export default function* rootSaga() {
  yield all([fork(LoginSaga)]);
  yield all([fork(AuthPhoneNumberSaga)]);
  yield all([fork(VerifyPinSaga)]);
  yield all([fork(CreateUserSaga)]);
  yield all([fork(DisplayPaginatedProductsSaga)]);
  yield all([fork(LoadMoreProductsSaga)]);
  yield all([fork(GetUserByIdSaga)]);
  yield all([fork(GetRecommendedProductsSaga)]);
  yield all([fork(RefreshProductSaga)]);
  yield all([fork(GetProductDetailSaga)]);
  yield all([fork(CreateProductSaga)]);
  yield all([fork(GetDataNeededToAddPostSaga)]);
}
