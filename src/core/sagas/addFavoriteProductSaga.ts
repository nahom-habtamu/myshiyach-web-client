import * as Effects from "redux-saga/effects";
import * as actionTypes from "../action_types/product/saved_products_action_types";
import { addFavoriteProduct } from "../repositories/product_repository";

const call: any = Effects.call;

function* onAddFavoriteProduct(action: actionTypes.AddSavedPostsItemAction) {
  yield call(addFavoriteProduct, action.payload);
}

function* watchOnAddFavoriteProduct() {
  yield Effects.takeEvery(
    actionTypes.ADD_SAVED_POSTS_ITEM,
    onAddFavoriteProduct
  );
}

export default function* addFavoriteProductSaga() {
  yield Effects.all([Effects.fork(watchOnAddFavoriteProduct)]);
}
