import * as Effects from "redux-saga/effects";
import * as getPostDetailCreators from "../action_creators/product/get_product_detail_action_creators";
import * as getPostDetailTypes from "../action_types/product/get_product_detail_action_types";
import Product from "../models/product/product";
import User from "../models/user/user";
import { getProductById } from "../repositories/product_repository";
import { getUserById } from "../repositories/user_repository";

const call: any = Effects.call;

function* onGetProductDetail(
  getProductDetail: getPostDetailTypes.GetProductDetailAction
) {
  try {
    yield Effects.put(getPostDetailCreators.getProductDetailLoading());
    const product: Product = yield call(
      getProductById,
      getProductDetail.payload
    );
    const createdBy: User = yield call(getUserById, {
      id: product.createdBy,
      token: getProductDetail.payload.token,
    });
    yield Effects.put(
      getPostDetailCreators.getProductDetailSuccess({
        createdBy,
        product,
      })
    );
  } catch (error: any) {
    yield Effects.put(
      getPostDetailCreators.getProductDetailFailure(error.response.data.error)
    );
  }
}

function* watchOnGetProductDetail() {
  yield Effects.takeEvery(
    getPostDetailTypes.GET_PRODUCT_DETAIL,
    onGetProductDetail
  );
}

export default function* getProductDetailSaga() {
  yield Effects.all([Effects.fork(watchOnGetProductDetail)]);
}
