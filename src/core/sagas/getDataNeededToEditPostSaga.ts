import * as Effects from "redux-saga/effects";
import * as getDataNeededToEditPostCreators from "../action_creators/common/get_data_needed_to_edit_post_action_creators";
import * as getDataNeededToEditPostTypes from "../action_types/common/get_data_needed_to_edit_post_action_types";
import MainCategory from "../models/category/main_category";
import Product from "../models/product/product";
import { getAllCategories } from "../repositories/category_repository";
import { getAllCities } from "../repositories/city_repository";
import { getProductById } from "../repositories/product_repository";

const call: any = Effects.call;

function* onGetDataNeededToEditPost(
  getDataNeededToEditPostAction: getDataNeededToEditPostTypes.GetDataNeededToEditPostAction
) {
  try {
    yield Effects.put(
      getDataNeededToEditPostCreators.getDataNeededToEditPostLoading()
    );
    const product: Product = yield call(getProductById, {
      id: getDataNeededToEditPostAction.payload.id,
      token: getDataNeededToEditPostAction.payload.token,
    });
    const cities: string[] = yield call(getAllCities);
    const categories: MainCategory[] = yield call(getAllCategories);

    yield Effects.put(
      getDataNeededToEditPostCreators.getDataNeededToEditPostSuccess({
        cities,
        categories,
        product,
      })
    );
  } catch (error: any) {
    yield Effects.put(
      getDataNeededToEditPostCreators.getDataNeededToEditPostFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnGetDataNeededToEditPost() {
  yield Effects.takeEvery(
    getDataNeededToEditPostTypes.GET_DATA_NEEDED_TO_EDIT_POST,
    onGetDataNeededToEditPost
  );
}

export default function* getDataNeededToEditPostSaga() {
  yield Effects.all([Effects.fork(watchOnGetDataNeededToEditPost)]);
}
