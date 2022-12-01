import * as Effects from "redux-saga/effects";
import * as actionCreators from "../action_creators/product/get_my_posts_action_creators";
import * as actionTypes from "../action_types/product/get_my_posts_action_types";
import Product from "../models/product/product";
import { getProductsByUser } from "../repositories/product_repository";

const call: any = Effects.call;

function* onGetMyPosts(getMyPosts: actionTypes.GetMyPostsAction) {
  try {
    yield Effects.put(actionCreators.getMyPostsLoading());
    const products: Product[] = yield call(getProductsByUser, {
      userId: getMyPosts.payload.id,
      token: getMyPosts.payload.token,
    });
    yield Effects.put(actionCreators.getMyPostsSuccess(products));
  } catch (error: any) {
    yield Effects.put(
      actionCreators.getMyPostsFailure(error.response.data.error)
    );
  }
}

function* watchOnGetMyPosts() {
  yield Effects.takeEvery(actionTypes.GET_MY_POSTS, onGetMyPosts);
}

export default function* getMyPostsSaga() {
  yield Effects.all([Effects.fork(watchOnGetMyPosts)]);
}
