import * as Effects from "redux-saga/effects";
import { getPaginatedProducts } from "../repositories/product_repository";
import * as getRecommendedProductCreators from "../action_creators/product/get_recommended_products_action_creators";
import * as getRecommendedProductsTypes from "../action_types/product/get_recommended_products_action_types";
import GetPaginatedProductsResult from "../models/product/get_paginated_products_result";

const call: any = Effects.call;

function* onGetRecommendedProducts(
  getRecommendedProducts: getRecommendedProductsTypes.GetRecommendedProductsAction
) {
  try {
    yield Effects.put(
      getRecommendedProductCreators.getRecommendedProductsLoading()
    );
    const result: GetPaginatedProductsResult = yield call(
      getPaginatedProducts,
      getRecommendedProducts.payload
    );
    yield Effects.put(
      getRecommendedProductCreators.getRecommendedProductsSuccess(
        result.results
      )
    );
  } catch (error: any) {
    yield Effects.put(
      getRecommendedProductCreators.getRecommendedProductsFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnGetRecommendedProducts() {
  yield Effects.takeEvery(
    getRecommendedProductsTypes.GET_RECOMMENDED_PRODUCTS,
    onGetRecommendedProducts
  );
}

export default function* getRecommendedProductsSaga() {
  yield Effects.all([Effects.fork(watchOnGetRecommendedProducts)]);
}
