import * as Effects from "redux-saga/effects";

import { createProduct } from "../repositories/product_repository";
import { uploadImagesToApiServer } from "../repositories/upload_repository";

import * as createProductCreators from "../action_creators/product/create_product_action_creators";
import * as createProductTypes from "../action_types/product/create_product_action_types";
import Product from "../models/product/product";

const call: any = Effects.call;

function* onCreateProduct(
  createProductAction: createProductTypes.CreateProductAction
) {
  try {
    yield Effects.put(createProductCreators.createProductLoading());

    const uploadedFiles: string[] = yield call(
      uploadImagesToApiServer,
      createProductAction.payload.imagesToUpload,
      "product_images"
    );

    const createdProduct: Product = yield call(createProduct, {
      ...createProductAction.payload,
      product: {
        ...createProductAction.payload.product,
        productImages: uploadedFiles,
      },
    });

    yield Effects.put(
      createProductCreators.createProductSuccess(createdProduct)
    );
  } catch (error: any) {
    console.log(error.response.data.error);

    yield Effects.put(
      createProductCreators.createProductFailure(error.response.data.error)
    );
  }
}

function* watchOnCreateProduct() {
  yield Effects.takeEvery(createProductTypes.CREATE_PRODUCT, onCreateProduct);
}

export default function* createProductSaga() {
  yield Effects.all([Effects.fork(watchOnCreateProduct)]);
}
