import * as actions from "../../action_types/product/get_recommended_products_action_types";
import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";
import Product from "../../models/product/product";

export const getRecommendedProducts = (
  request: GetPaginatedProductsRequest
): actions.GetRecommendedProductsAction => {
  return {
    type: actions.GET_RECOMMENDED_PRODUCTS,
    payload: request,
  };
};

export const getRecommendedProductsLoading =
  (): actions.GetRecommendedProductsLoadingAction => {
    return { type: actions.GET_RECOMMENDED_PRODUCTS_LOADING };
  };

export const getRecommendedProductsSuccess = (
  response: Product[]
): actions.GetRecommendedProductsSuccessAction => {
  return {
    type: actions.GET_RECOMMENDED_PRODUCTS_SUCCESS,
    payload: response,
  };
};

export const getRecommendedProductsFailure = (
  message: string
): actions.GetRecommendedProductsFailureAction => {
  return { type: actions.GET_RECOMMENDED_PRODUCTS_FAILURE, message: message };
};
