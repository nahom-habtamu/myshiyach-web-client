import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/common/get_user_and_products_action_creators";
import * as actionTypes from "../action_types/common/get_user_and_products_action_types";
import Product from "../models/product/product";
import { getUserById } from "../repositories/user_repository";
import { getProductsByUser } from "../repositories/product_repository";
import User from "../models/user/user";

const call: any = Effects.call;

function* onGetUserAndProducts(action: actionTypes.GetUserAndProductsAction) {
  try {
    yield Effects.put(actionCreators.getUserAndProductsLoading());
    const products: Product[] = yield call(getProductsByUser, {
      userId: action.payload.id,
      token: action.payload.token,
    });
    const user: User = yield call(getUserById, {
      id: action.payload.id,
      token: action.payload.token,
    });

    yield Effects.put(
      actionCreators.getUserAndProductsSuccess({
        user,
        products,
      })
    );
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getUserAndProductsFailure(error.response.data.error)
    );
  }
}

function* watchOnGetUserAndProducts() {
  yield Effects.takeEvery(
    actionTypes.GET_USER_AND_PRODUCTS,
    onGetUserAndProducts
  );
}

export default function* getUserAndProductsSaga() {
  yield Effects.all([Effects.fork(watchOnGetUserAndProducts)]);
}
