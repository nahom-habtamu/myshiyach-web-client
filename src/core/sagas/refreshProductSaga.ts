import * as Effects from "redux-saga/effects";

import { refreshProduct } from "../repositories/product_repository";

import * as refreshProductCreators from "../action_creators/product/refresh_product_action_creators";
import * as refreshProductTypes from "../action_types/product/refresh_product_action_types";
import Product from "../models/product/product";

const call: any = Effects.call;

function* onRefreshProduct(
  refreshProductAction: refreshProductTypes.RefreshProductAction
) {
  try {
    yield Effects.put(refreshProductCreators.refreshProductLoading());
    const data: Product = yield call(
      refreshProduct,
      refreshProductAction.payload
    );

    yield Effects.put(refreshProductCreators.refreshProductSuccess(data));
  } catch (error: any) {
    yield Effects.put(
      refreshProductCreators.refreshProductFailure(error.response.data.error)
    );
  }
}

function* watchOnRefreshProduct() {
  yield Effects.takeEvery(
    refreshProductTypes.REFRESH_PRODUCT,
    onRefreshProduct
  );
}

export default function* refreshProductSaga() {
  yield Effects.all([Effects.fork(watchOnRefreshProduct)]);
}
