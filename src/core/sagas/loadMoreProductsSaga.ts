import * as Effects from "redux-saga/effects";
import { getPaginatedProducts } from "../repositories/product_repository";
import * as loadMoreProductsCreators from "../action_creators/product/load_more_products_action_creators";
import * as loadMoreProductsTypes from "../action_types/product/load_more_products_action_types";
import GetPaginatedProductsResult from "../models/product/get_paginated_products_result";

const call: any = Effects.call;

function* onLoadMoreProducts(
  loadMoreProducts: loadMoreProductsTypes.LoadMoreProductsAction
) {
  try {
    yield Effects.put(loadMoreProductsCreators.loadMoreProductsLoading());
    const result: GetPaginatedProductsResult = yield call(
      getPaginatedProducts,
      loadMoreProducts.payload
    );

    yield Effects.put(loadMoreProductsCreators.loadMoreProductsSuccess(result));
  } catch (error: any) {
    yield Effects.put(
      loadMoreProductsCreators.loadMoreProductsFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnLoadMoreProducts() {
  yield Effects.takeEvery(
    loadMoreProductsTypes.LOAD_MORE_PRODUCTS,
    onLoadMoreProducts
  );
}

export default function* loadMoreProductsSaga() {
  yield Effects.all([Effects.fork(watchOnLoadMoreProducts)]);
}
