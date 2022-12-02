import * as actions from "../../action_types/product/saved_products_action_types";
import Product from "../../models/product/product";

export const getSavedPosts = (): actions.GetSavedPostsAction => {
  return {
    type: actions.GET_SAVED_POSTS,
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

export const deleteSavedPostsItem = (
  id: string
): actions.DeleteSavedPostsItemAction => {
  return {
    type: actions.DELETE_SAVED_POSTS_ITEM,
    payload: id,
  };
};

export const addSavedPostsItem = (
  product: Product
): actions.AddSavedPostsItemAction => {
  return {
    type: actions.ADD_SAVED_POSTS_ITEM,
    payload: product,
  };
};
