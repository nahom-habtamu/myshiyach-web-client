import * as Effects from "redux-saga/effects";
import * as actionTypes from "../action_types/product/saved_products_action_types";
import User from "../models/user/user";
import { saveUserToSession } from "../repositories/auth_repository";
import { updateFavoriteProducts } from "../repositories/user_repository";

const call: any = Effects.call;

function* onUpdateFavoriteProduct(action: actionTypes.UpdateSavedPostsItemAction) {
  const resultUser: User = yield call(
    updateFavoriteProducts,
    action.payload.userId,
    action.payload.favoriteProducts.map(p => p._id),
    action.payload.token
  );

  yield call(saveUserToSession, {
    token: action.payload.token
  }, resultUser);

}

function* watchOnUpdateFavoriteProduct() {
  yield Effects.takeEvery(
    actionTypes.UPDATE_SAVED_POSTS_ITEM,
    onUpdateFavoriteProduct
  );
}

export default function* addFavoriteProductSaga() {
  yield Effects.all([Effects.fork(watchOnUpdateFavoriteProduct)]);
}
