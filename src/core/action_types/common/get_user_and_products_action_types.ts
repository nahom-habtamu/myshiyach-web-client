import User from "../../models/user/user";
import Product from "../../models/product/product";

export const GET_USER_AND_PRODUCTS = "commonActionTypes/GET_USER_AND_PRODUCTS";
export interface GetUserAndProductsAction {
  type: typeof GET_USER_AND_PRODUCTS;
  payload: {
    id: string;
    token: string;
  };
}

export const GET_USER_AND_PRODUCTS_CLEAR =
  "commonActionTypes/GET_USER_AND_PRODUCTS_CLEAR";
export interface GetUserAndProductsClearAction {
  type: typeof GET_USER_AND_PRODUCTS_CLEAR;
}

export const GET_USER_AND_PRODUCTS_LOADING =
  "commonActionTypes/GET_USER_AND_PRODUCTS_LOADING";
export interface GetUserAndProductsLoadingAction {
  type: typeof GET_USER_AND_PRODUCTS_LOADING;
}

export const GET_USER_AND_PRODUCTS_SUCCESS =
  "commonActionTypes/GET_USER_AND_PRODUCTS_SUCCESS";
export interface GetUserAndProductsSuccessAction {
  type: typeof GET_USER_AND_PRODUCTS_SUCCESS;
  payload: {
    user: User;
    products: Product[];
  };
}

export const GET_USER_AND_PRODUCTS_FAILURE =
  "commonActionTypes/GET_USER_AND_PRODUCTS_FAILURE";
export interface GetUserAndProductsFailureAction {
  type: typeof GET_USER_AND_PRODUCTS_FAILURE;
  message: String;
}

export type GetUserAndProductsActionType =
  | GetUserAndProductsAction
  | GetUserAndProductsLoadingAction
  | GetUserAndProductsFailureAction
  | GetUserAndProductsClearAction
  | GetUserAndProductsSuccessAction;
