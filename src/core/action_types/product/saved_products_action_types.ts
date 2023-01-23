import Product from "../../models/product/product";

export const GET_SAVED_POSTS = "productActionTypes/GET_SAVED_POSTS";
export interface GetSavedPostsAction {
  type: typeof GET_SAVED_POSTS;
  payload: {
    token: string,
    favoriteProducts: string[]
  };
}

export const GET_SAVED_POSTS_LOADING =
  "productActionTypes/GET_SAVED_POSTS_LOADING";
export interface GetSavedPostsLoadingAction {
  type: typeof GET_SAVED_POSTS_LOADING;
}

export const GET_SAVED_POSTS_SUCCESS =
  "productActionTypes/GET_SAVED_POSTS_SUCCESS";
export interface GetSavedPostsSuccessAction {
  type: typeof GET_SAVED_POSTS_SUCCESS;
  payload: Product[];
}

export const GET_SAVED_POSTS_FAILURE =
  "productActionTypes/GET_SAVED_POSTS_FAILURE";
export interface GetSavedPostsFailureAction {
  type: typeof GET_SAVED_POSTS_FAILURE;
  message: String;
}


export const UPDATE_SAVED_POSTS_ITEM = "productActionTypes/UPDATE_SAVED_POSTS_ITEM";
export interface UpdateSavedPostsItemAction {
  type: typeof UPDATE_SAVED_POSTS_ITEM;
  payload: {
    favoriteProducts: Product[],
    token: string,
    userId: string
  };
}

export type GetSavedPostsActionType =
  | GetSavedPostsAction
  | GetSavedPostsLoadingAction
  | GetSavedPostsFailureAction
  | GetSavedPostsSuccessAction
  | UpdateSavedPostsItemAction;
