import * as Effects from "redux-saga/effects";
import * as actionTypes from "../action_types/product/saved_products_action_types";
import { removeFavoriteProduct } from "../repositories/product_repository";

const call: any = Effects.call;

function* onRemoveFavoriteProduct(
  action: actionTypes.DeleteSavedPostsItemAction
) {
  yield call(removeFavoriteProduct, action.payload);
}

function* watchOnRemoveFavoriteProduct() {
  yield Effects.takeEvery(
    actionTypes.DELETE_SAVED_POSTS_ITEM,
    onRemoveFavoriteProduct
  );
}

export default function* addFavoriteProductSaga() {
  yield Effects.all([Effects.fork(watchOnRemoveFavoriteProduct)]);
}
