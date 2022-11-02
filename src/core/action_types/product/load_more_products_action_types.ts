import GetPaginatedProductsResult from "../../models/product/get_paginated_products_result";
import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";

export const LOAD_MORE_PRODUCTS = "productActionTypes/LOAD_MORE_PRODUCTS";
export interface LoadMoreProductsAction {
  type: typeof LOAD_MORE_PRODUCTS;
  payload: GetPaginatedProductsRequest;
}

export const LOAD_MORE_PRODUCTS_LOADING =
  "productActionTypes/LOAD_MORE_PRODUCTS_LOADING";
export interface LoadMoreProductsLoadingAction {
  type: typeof LOAD_MORE_PRODUCTS_LOADING;
}

export const LOAD_MORE_PRODUCTS_SUCCESS =
  "productActionTypes/LOAD_MORE_PRODUCTS_SUCCESS";
export interface LoadMoreProductsSuccessAction {
  type: typeof LOAD_MORE_PRODUCTS_SUCCESS;
  payload: GetPaginatedProductsResult;
}

export const LOAD_MORE_PRODUCTS_FAILURE =
  "productActionTypes/LOAD_MORE_PRODUCTS_FAILURE";
export interface LoadMoreProductsFailureAction {
  type: typeof LOAD_MORE_PRODUCTS_FAILURE;
  message: String;
}

export type LoadMoreProductsActionType =
  | LoadMoreProductsAction
  | LoadMoreProductsLoadingAction
  | LoadMoreProductsFailureAction
  | LoadMoreProductsSuccessAction;
