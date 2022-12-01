import Product from "../../models/product/product";

export const GET_MY_POSTS = "productActionTypes/GET_MY_POSTS";
export interface GetMyPostsAction {
  type: typeof GET_MY_POSTS;
  payload: {
    id: string;
    token: string;
  };
}

export const GET_MY_POSTS_LOADING = "productActionTypes/GET_MY_POSTS_LOADING";
export interface GetMyPostsLoadingAction {
  type: typeof GET_MY_POSTS_LOADING;
}

export const GET_MY_POSTS_SUCCESS = "productActionTypes/GET_MY_POSTS_SUCCESS";
export interface GetMyPostsSuccessAction {
  type: typeof GET_MY_POSTS_SUCCESS;
  payload: Product[];
}

export const GET_MY_POSTS_FAILURE = "productActionTypes/GET_MY_POSTS_FAILURE";
export interface GetMyPostsFailureAction {
  type: typeof GET_MY_POSTS_FAILURE;
  message: String;
}

export type GetMyPostsActionType =
  | GetMyPostsAction
  | GetMyPostsLoadingAction
  | GetMyPostsFailureAction
  | GetMyPostsSuccessAction;
