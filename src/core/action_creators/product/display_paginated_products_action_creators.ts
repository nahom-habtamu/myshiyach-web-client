import * as actions from "../../action_types/product/display_paginated_products_action_types";
import DisplayPaginatedProductsResult from "../../models/product/display_paginated_products_result";
import GetPaginatedProductsRequest from "../../models/product/get_paginated_product_request";

export const displayPaginatedProducts = (
  request: GetPaginatedProductsRequest
): actions.DisplayPaginatedProductsAction => {
  return {
    type: actions.DISPLAY_PAGINATED_PRODUCTS,
    payload: request,
  };
};

export const displayPaginatedProductsLoading =
  (): actions.DisplayPaginatedProductsLoadingAction => {
    return { type: actions.DISPLAY_PAGINATED_PRODUCTS_LOADING };
  };

export const displayPaginatedProductsSuccess = (
  response: DisplayPaginatedProductsResult
): actions.DisplayPaginatedProductsSuccessAction => {
  return {
    type: actions.DISPLAY_PAGINATED_PRODUCTS_SUCCESS,
    payload: response,
  };
};

export const displayPaginatedProductsFailure = (
  message: string
): actions.DisplayPaginatedProductsFailureAction => {
  return { type: actions.DISPLAY_PAGINATED_PRODUCTS_FAILURE, message: message };
};
