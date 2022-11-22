import MainCategory from "../../models/category/main_category";
import Product from "../../models/product/product";

export const GET_DATA_NEEDED_TO_EDIT_POST =
  "commonActionTypes/GET_DATA_NEEDED_TO_EDIT_POST";
export interface GetDataNeededToEditPostAction {
  type: typeof GET_DATA_NEEDED_TO_EDIT_POST;
  payload: {
    id: string;
    token: string;
  };
}

export const GET_DATA_NEEDED_TO_EDIT_POST_LOADING =
  "commonActionTypes/GET_DATA_NEEDED_TO_EDIT_POST_LOADING";
export interface GetDataNeededToEditPostLoadingAction {
  type: typeof GET_DATA_NEEDED_TO_EDIT_POST_LOADING;
}

export const GET_DATA_NEEDED_TO_EDIT_POST_SUCCESS =
  "commonActionTypes/GET_DATA_NEEDED_TO_EDIT_POST_SUCCESS";
export interface GetDataNeededToEditPostSuccessAction {
  type: typeof GET_DATA_NEEDED_TO_EDIT_POST_SUCCESS;
  payload: {
    cities: string[];
    categories: MainCategory[];
    product: Product;
  };
}

export const GET_DATA_NEEDED_TO_EDIT_POST_FAILURE =
  "commonActionTypes/GET_DATA_NEEDED_TO_EDIT_POST_FAILURE";
export interface GetDataNeededToEditPostFailureAction {
  type: typeof GET_DATA_NEEDED_TO_EDIT_POST_FAILURE;
  message: String;
}

export type GetDataNeededToEditPostActionType =
  | GetDataNeededToEditPostAction
  | GetDataNeededToEditPostLoadingAction
  | GetDataNeededToEditPostFailureAction
  | GetDataNeededToEditPostSuccessAction;
