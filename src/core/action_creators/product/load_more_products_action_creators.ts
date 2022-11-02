import * as actions from "../../action_types/product/load_more_products_action_types";
import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";
import GetPaginatedProductsResult from "../../models/product/get_paginated_products_result";

export const loadMoreProducts = (
  request: GetPaginatedProductsRequest
): actions.LoadMoreProductsAction => {
  return {
    type: actions.LOAD_MORE_PRODUCTS,
    payload: request,
  };
};

export const loadMoreProductsLoading =
  (): actions.LoadMoreProductsLoadingAction => {
    return { type: actions.LOAD_MORE_PRODUCTS_LOADING };
  };

export const loadMoreProductsSuccess = (
  response: GetPaginatedProductsResult
): actions.LoadMoreProductsSuccessAction => {
  return {
    type: actions.LOAD_MORE_PRODUCTS_SUCCESS,
    payload: response,
  };
};

export const loadMoreProductsFailure = (
  message: string
): actions.LoadMoreProductsFailureAction => {
  return { type: actions.LOAD_MORE_PRODUCTS_FAILURE, message: message };
};
