import Product from "../../models/product/product";
import User from "../../models/user/user";

export const GET_PRODUCT_DETAIL = "productActionTypes/GET_PRODUCT_DETAIL";
export interface GetProductDetailAction {
  type: typeof GET_PRODUCT_DETAIL;
  payload: {
    id: string;
    token: string;
  };
}

export const GET_PRODUCT_DETAIL_LOADING =
  "productActionTypes/GET_PRODUCT_DETAIL_LOADING";
export interface GetProductDetailLoadingAction {
  type: typeof GET_PRODUCT_DETAIL_LOADING;
}

export const GET_PRODUCT_DETAIL_SUCCESS =
  "productActionTypes/GET_PRODUCT_DETAIL_SUCCESS";
export interface GetProductDetailSuccessAction {
  type: typeof GET_PRODUCT_DETAIL_SUCCESS;
  payload: {
    product: Product;
    createdBy: User;
  };
}

export const GET_PRODUCT_DETAIL_FAILURE =
  "productActionTypes/GET_PRODUCT_DETAIL_FAILURE";
export interface GetProductDetailFailureAction {
  type: typeof GET_PRODUCT_DETAIL_FAILURE;
  message: String;
}

export type GetProductDetailActionType =
  | GetProductDetailAction
  | GetProductDetailLoadingAction
  | GetProductDetailFailureAction
  | GetProductDetailSuccessAction;
