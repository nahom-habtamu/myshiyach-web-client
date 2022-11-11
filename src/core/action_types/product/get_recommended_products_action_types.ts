import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";
import Product from "../../models/product/product";

export const GET_RECOMMENDED_PRODUCTS =
  "productActionTypes/GET_RECOMMENDED_PRODUCTS";
export interface GetRecommendedProductsAction {
  type: typeof GET_RECOMMENDED_PRODUCTS;
  payload: GetPaginatedProductsRequest;
}

export const GET_RECOMMENDED_PRODUCTS_LOADING =
  "productActionTypes/GET_RECOMMENDED_PRODUCTS_LOADING";
export interface GetRecommendedProductsLoadingAction {
  type: typeof GET_RECOMMENDED_PRODUCTS_LOADING;
}

export const GET_RECOMMENDED_PRODUCTS_SUCCESS =
  "productActionTypes/GET_RECOMMENDED_PRODUCTS_SUCCESS";
export interface GetRecommendedProductsSuccessAction {
  type: typeof GET_RECOMMENDED_PRODUCTS_SUCCESS;
  payload: Product[];
}

export const GET_RECOMMENDED_PRODUCTS_FAILURE =
  "productActionTypes/GET_RECOMMENDED_PRODUCTS_FAILURE";
export interface GetRecommendedProductsFailureAction {
  type: typeof GET_RECOMMENDED_PRODUCTS_FAILURE;
  message: String;
}

export type GetRecommendedProductsActionType =
  | GetRecommendedProductsAction
  | GetRecommendedProductsLoadingAction
  | GetRecommendedProductsFailureAction
  | GetRecommendedProductsSuccessAction;
