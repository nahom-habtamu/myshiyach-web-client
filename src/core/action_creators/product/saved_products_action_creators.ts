import * as actions from "../../action_types/product/saved_products_action_types";
import Product from "../../models/product/product";

export const getSavedPosts = (favoriteProducts: string[], token: string): actions.GetSavedPostsAction => {
  return {
    type: actions.GET_SAVED_POSTS,
    payload: {
      favoriteProducts,
      token
    }
  };
};

export const getSavedPostsLoading = (): actions.GetSavedPostsLoadingAction => {
  return { type: actions.GET_SAVED_POSTS_LOADING };
};

export const getSavedPostsSuccess = (
  products: Product[]
): actions.GetSavedPostsSuccessAction => {
  return {
    type: actions.GET_SAVED_POSTS_SUCCESS,
    payload: products,
  };
};

export const getSavedPostsFailure = (
  message: string
): actions.GetSavedPostsFailureAction => {
  return {
    type: actions.GET_SAVED_POSTS_FAILURE,
    message: message,
  };
};

export const updateSavedPostsItem = (
  favoriteProducts: Product[],
  userId: string,
  token: string
): actions.UpdateSavedPostsItemAction => {
  return {
    type: actions.UPDATE_SAVED_POSTS_ITEM,
    payload: {
      favoriteProducts,
      userId,
      token
    }
  };
};
