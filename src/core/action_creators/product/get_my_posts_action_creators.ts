import * as actions from "../../action_types/product/get_my_posts_action_types";
import Product from "../../models/product/product";

export const getMyPosts = (
  id: string,
  token: string
): actions.GetMyPostsAction => {
  return {
    type: actions.GET_MY_POSTS,
    payload: {
      id,
      token,
    },
  };
};

export const getMyPostsLoading = (): actions.GetMyPostsLoadingAction => {
  return { type: actions.GET_MY_POSTS_LOADING };
};

export const getMyPostsSuccess = (
  products: Product[]
): actions.GetMyPostsSuccessAction => {
  return {
    type: actions.GET_MY_POSTS_SUCCESS,
    payload: products,
  };
};

export const getMyPostsFailure = (
  message: string
): actions.GetMyPostsFailureAction => {
  return {
    type: actions.GET_MY_POSTS_FAILURE,
    message: message,
  };
};
