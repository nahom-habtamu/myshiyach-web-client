import * as Effects from "redux-saga/effects";
import {
  getFavoriteProducts,
  getPaginatedProducts,
} from "../repositories/product_repository";
import { getAllCategories } from "../repositories/category_repository";
import { getAllCities } from "../repositories/city_repository";
import * as displayPaginatedProductCreators from "../action_creators/product/display_paginated_products_action_creators";
import * as displayPaginatedProductsTypes from "../action_types/product/display_paginated_products_action_types";
import GetPaginatedProductsResult from "../models/product/get_paginated_products_result";
import Product from "../models/product/product";
import MainCategory from "../models/category/main_category";

const call: any = Effects.call;

function* onDisplayPaginatedProducts(
  displayPaginatedProducts: displayPaginatedProductsTypes.DisplayPaginatedProductsAction
) {
  try {
    yield Effects.put(
      displayPaginatedProductCreators.displayPaginatedProductsLoading()
    );
    const result: GetPaginatedProductsResult = yield call(
      getPaginatedProducts,
      displayPaginatedProducts.payload
    );
    const favoriteProducts: Product[] = yield call(getFavoriteProducts);
    const categories: MainCategory[] = yield call(getAllCategories);
    const cities: string[] = yield call(getAllCities);

    yield Effects.put(
      displayPaginatedProductCreators.displayPaginatedProductsSuccess({
        categories,
        favoriteProducts,
        productsWithPageAndLimit: result,
        cities,
      })
    );
  } catch (error: any) {
    yield Effects.put(
      displayPaginatedProductCreators.displayPaginatedProductsFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnDisplayPaginatedProducts() {
  yield Effects.takeEvery(
    displayPaginatedProductsTypes.DISPLAY_PAGINATED_PRODUCTS,
    onDisplayPaginatedProducts
  );
}

export default function* displayPaginatedProductsSaga() {
  yield Effects.all([Effects.fork(watchOnDisplayPaginatedProducts)]);
}
