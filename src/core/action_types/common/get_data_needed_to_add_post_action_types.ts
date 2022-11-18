import MainCategory from "../../models/category/main_category";

export const GET_DATA_NEEDED_TO_ADD_POST =
  "commonActionTypes/GET_DATA_NEEDED_TO_ADD_POST";
export interface GetDataNeededToAddPostAction {
  type: typeof GET_DATA_NEEDED_TO_ADD_POST;
}

export const GET_DATA_NEEDED_TO_ADD_POST_LOADING =
  "commonActionTypes/GET_DATA_NEEDED_TO_ADD_POST_LOADING";
export interface GetDataNeededToAddPostLoadingAction {
  type: typeof GET_DATA_NEEDED_TO_ADD_POST_LOADING;
}

export const GET_DATA_NEEDED_TO_ADD_POST_SUCCESS =
  "commonActionTypes/GET_DATA_NEEDED_TO_ADD_POST_SUCCESS";
export interface GetDataNeededToAddPostSuccessAction {
  type: typeof GET_DATA_NEEDED_TO_ADD_POST_SUCCESS;
  payload: {
    cities: string[];
    categories: MainCategory[];
  };
}

export const GET_DATA_NEEDED_TO_ADD_POST_FAILURE =
  "commonActionTypes/GET_DATA_NEEDED_TO_ADD_POST_FAILURE";
export interface GetDataNeededToAddPostFailureAction {
  type: typeof GET_DATA_NEEDED_TO_ADD_POST_FAILURE;
  message: String;
}

export type GetDataNeededToAddPostActionType =
  | GetDataNeededToAddPostAction
  | GetDataNeededToAddPostLoadingAction
  | GetDataNeededToAddPostFailureAction
  | GetDataNeededToAddPostSuccessAction;
