import * as displayActions from "../action_types/product/display_paginated_products_action_types";
import DisplayPaginatedProductsResult from "../models/product/display_paginated_products_result";

export interface DisplayPaginatedProductsState {
  paginatedProductResult: DisplayPaginatedProductsResult | null;
  error: String;
  isLoading: boolean;
}

const initialState: DisplayPaginatedProductsState = {
  paginatedProductResult: null,
  error: "",
  isLoading: false,
};

export default function displayPaginatedProductsReducer(
  state: DisplayPaginatedProductsState = initialState,
  action: displayActions.DisplayPaginatedProductsActionType
): DisplayPaginatedProductsState {
  switch (action.type) {
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_LOADING:
      return {
        paginatedProductResult: null,
        error: "",
        isLoading: true,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_FAILURE:
      return {
        paginatedProductResult: null,
        error: action.message,
        isLoading: false,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_SUCCESS:
      return {
        paginatedProductResult: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
