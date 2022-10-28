import DisplayPaginatedProductsResult from "../../models/product/display_paginated_products_result";
import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";

export const DISPLAY_PAGINATED_PRODUCTS =
  "productActionTypes/DISPLAY_PAGINATED_PRODUCTS";
export interface DisplayPaginatedProductsAction {
  type: typeof DISPLAY_PAGINATED_PRODUCTS;
  payload: GetPaginatedProductsRequest;
}

export const DISPLAY_PAGINATED_PRODUCTS_LOADING =
  "productActionTypes/DISPLAY_PAGINATED_PRODUCTS_LOADING";
export interface DisplayPaginatedProductsLoadingAction {
  type: typeof DISPLAY_PAGINATED_PRODUCTS_LOADING;
}

export const DISPLAY_PAGINATED_PRODUCTS_SUCCESS =
  "productActionTypes/DISPLAY_PAGINATED_PRODUCTS_SUCCESS";
export interface DisplayPaginatedProductsSuccessAction {
  type: typeof DISPLAY_PAGINATED_PRODUCTS_SUCCESS;
  payload: DisplayPaginatedProductsResult;
}

export const DISPLAY_PAGINATED_PRODUCTS_FAILURE =
  "productActionTypes/DISPLAY_PAGINATED_PRODUCTS_FAILURE";
export interface DisplayPaginatedProductsFailureAction {
  type: typeof DISPLAY_PAGINATED_PRODUCTS_FAILURE;
  message: String;
}

export type DisplayPaginatedProductssActionType =
  | DisplayPaginatedProductsAction
  | DisplayPaginatedProductsLoadingAction
  | DisplayPaginatedProductsFailureAction
  | DisplayPaginatedProductsSuccessAction;
