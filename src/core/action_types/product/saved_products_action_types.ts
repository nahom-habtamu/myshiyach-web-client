import Product from "../../models/product/product";

export const GET_SAVED_POSTS = "productActionTypes/GET_SAVED_POSTS";
export interface GetSavedPostsAction {
  type: typeof GET_SAVED_POSTS;
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

export const DELETE_SAVED_POSTS_ITEM =
  "productActionTypes/DELETE_SAVED_POSTS_ITEM";
export interface DeleteSavedPostsItemAction {
  type: typeof DELETE_SAVED_POSTS_ITEM;
  payload: string;
}

export const ADD_SAVED_POSTS_ITEM = "productActionTypes/ADD_SAVED_POSTS_ITEM";
export interface AddSavedPostsItemAction {
  type: typeof ADD_SAVED_POSTS_ITEM;
  payload: Product;
}

export type GetSavedPostsActionType =
  | GetSavedPostsAction
  | GetSavedPostsLoadingAction
  | GetSavedPostsFailureAction
  | GetSavedPostsSuccessAction
  | DeleteSavedPostsItemAction
  | AddSavedPostsItemAction;
