import * as Effects from "redux-saga/effects";
import * as getDataNeededToAddPostCreators from "../action_creators/common/get_data_needed_to_add_post_action_creators";
import * as getDataNeededToAddPostTypes from "../action_types/common/get_data_needed_to_add_post_action_types";
import MainCategory from "../models/category/main_category";
import { getAllCategories } from "../repositories/category_repository";
import { getAllCities } from "../repositories/city_repository";

const call: any = Effects.call;

function* onGetDataNeededToAddPost() {
  try {
    yield Effects.put(
      getDataNeededToAddPostCreators.getDataNeededToAddPostLoading()
    );
    const cities: string[] = yield call(getAllCities);
    const categories: MainCategory[] = yield call(getAllCategories);
    yield Effects.put(
      getDataNeededToAddPostCreators.getDataNeededToAddPostSuccess({
        cities,
        categories,
      })
    );
  } catch (error: any) {
    yield Effects.put(
      getDataNeededToAddPostCreators.getDataNeededToAddPostFailure(
        error.response.data.error
      )
    );
  }
}

function* watchOnGetDataNeededToAddPost() {
  yield Effects.takeEvery(
    getDataNeededToAddPostTypes.GET_DATA_NEEDED_TO_ADD_POST,
    onGetDataNeededToAddPost
  );
}

export default function* getDataNeededToAddPostSaga() {
  yield Effects.all([Effects.fork(watchOnGetDataNeededToAddPost)]);
}
