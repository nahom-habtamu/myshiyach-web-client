import * as Effects from "redux-saga/effects";

import { editProduct } from "../repositories/product_repository";
import { uploadImagesToApiServer } from "../repositories/upload_repository";

import * as editProductCreators from "../action_creators/product/edit_product_action_creators";
import * as editProductTypes from "../action_types/product/edit-product_action_types";
import Product from "../models/product/product";

const call: any = Effects.call;

function* onEditProduct(editProductAction: editProductTypes.EditProductAction) {
  try {
    yield Effects.put(editProductCreators.editProductLoading());

    const uploadedFiles: string[] = yield call(
      uploadImagesToApiServer,
      editProductAction.payload.imagesToUpload
    );

    const editedProduct: Product = yield call(editProduct, {
      ...editProductAction.payload,
      product: {
        ...editProductAction.payload.product,
        productImages: [
          ...uploadedFiles,
          ...editProductAction.payload.product.productImages,
        ],
      },
    });

    yield Effects.put(editProductCreators.editProductSuccess(editedProduct));
  } catch (error: any) {
    yield Effects.put(
      editProductCreators.editProductFailure(error.response.data.error)
    );
  }
}

function* watchOnEditProduct() {
  yield Effects.takeEvery(editProductTypes.EDIT_PRODUCT, onEditProduct);
}

export default function* editProductSaga() {
  yield Effects.all([Effects.fork(watchOnEditProduct)]);
}
