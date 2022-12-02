import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/product/saved_products_action_creators";
import * as actionTypes from "../action_types/product/saved_products_action_types";
import Product from "../models/product/product";
import { getFavoriteProducts } from "../repositories/product_repository";

const call: any = Effects.call;

function* onGetSavedPosts() {
  try {
    yield Effects.put(actionCreators.getSavedPostsLoading());
    const products: Product[] = yield call(getFavoriteProducts);
    yield Effects.put(actionCreators.getSavedPostsSuccess(products));
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getSavedPostsFailure(error.response.data.error)
    );
  }
}

function* watchOnGetSavedPosts() {
  yield Effects.takeEvery(actionTypes.GET_SAVED_POSTS, onGetSavedPosts);
}

export default function* getSavedPostsSaga() {
  yield Effects.all([Effects.fork(watchOnGetSavedPosts)]);
}
