import * as Effects from "redux-saga/effects";

import { deleteProduct } from "../repositories/product_repository";

import * as deleteProductCreators from "../action_creators/product/delete_product_action_creators";
import * as deleteProductTypes from "../action_types/product/delete_product_action_types";

const call: any = Effects.call;

function* onDeleteProduct(
  deleteProductAction: deleteProductTypes.DeleteProductAction
) {
  try {
    yield Effects.put(deleteProductCreators.deleteProductLoading());

    const deletedProductId: string = yield call(deleteProduct, {
      id: deleteProductAction.payload.id,
      token: deleteProductAction.payload.token,
    });

    yield Effects.put(
      deleteProductCreators.deleteProductSuccess(deletedProductId)
    );
  } catch (error: any) {
    yield Effects.put(
      deleteProductCreators.deleteProductFailure(error.response.data.error)
    );
  }
}

function* watchOnDeleteProduct() {
  yield Effects.takeEvery(deleteProductTypes.DELETE_PRODUCT, onDeleteProduct);
}

export default function* deleteProductSaga() {
  yield Effects.all([Effects.fork(watchOnDeleteProduct)]);
}
