import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/product/saved_products_action_creators";
import * as actionTypes from "../action_types/product/saved_products_action_types";
import Product from "../models/product/product";
import { getProductById } from "../repositories/product_repository";

const call: any = Effects.call;

function* onGetSavedPosts(getSavedPosts: actionTypes.GetSavedPostsAction) {
  try {
    yield Effects.put(actionCreators.getSavedPostsLoading());

    let products: Product[] = [];

    for (let i = 0; i < getSavedPosts.payload.favoriteProducts.length; i++) {
      const element = getSavedPosts.payload.favoriteProducts[i];
      const product: Product = yield call(getProductById, {
        id: element,
        token: getSavedPosts.payload.token
      });
      products = [...products, product];
    }

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
