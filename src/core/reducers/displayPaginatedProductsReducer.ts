import * as displayActions from "../action_types/product/display_paginated_products_action_types";
import * as loadMoreActions from "../action_types/product/load_more_products_action_types";
import DisplayPaginatedProductsResult from "../models/product/display_paginated_products_result";

export interface DisplayPaginatedProductsState {
  paginated: DisplayPaginatedProductsResult | null;
  displayAllError: String;
  loadMoreError: String;
  isDisplayLoading: boolean;
  isLoadingMore: boolean;
}

const initialState: DisplayPaginatedProductsState = {
  paginated: null,
  displayAllError: "",
  loadMoreError: "",
  isDisplayLoading: false,
  isLoadingMore: false,
};

export default function displayPaginatedProductsReducer(
  state: DisplayPaginatedProductsState = initialState,
  action:
    | displayActions.DisplayPaginatedProductsActionType
    | loadMoreActions.LoadMoreProductsActionType
): DisplayPaginatedProductsState {
  switch (action.type) {
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_LOADING:
      return {
        paginated: null,
        displayAllError: "",
        loadMoreError: "",
        isDisplayLoading: true,
        isLoadingMore: false,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_FAILURE:
      return {
        paginated: null,
        displayAllError: action.message,
        loadMoreError: "",
        isDisplayLoading: false,
        isLoadingMore: false,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_SUCCESS:
      return {
        paginated: action.payload,
        loadMoreError: "",
        displayAllError: "",
        isDisplayLoading: false,
        isLoadingMore: false,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_LOADING:
      return {
        paginated: {
          categories: state.paginated?.categories ?? [],
          favoriteProducts: state.paginated?.favoriteProducts ?? [],
          cities: state.paginated?.cities ?? [],
          productsWithPageAndLimit: {
            next: state.paginated?.productsWithPageAndLimit.next ?? null,
            results: state.paginated?.productsWithPageAndLimit.results ?? [],
            previous:
              state.paginated?.productsWithPageAndLimit.previous ?? null,
          },
        },
        displayAllError: "",
        loadMoreError: "",
        isDisplayLoading: false,
        isLoadingMore: true,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_FAILURE:
      return {
        paginated: state.paginated,
        displayAllError: "",
        loadMoreError: action.message,
        isDisplayLoading: false,
        isLoadingMore: false,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        paginated: {
          categories: state.paginated?.categories ?? [],
          favoriteProducts: state.paginated?.favoriteProducts ?? [],
          cities: state.paginated?.cities ?? [],
          productsWithPageAndLimit: {
            next: action.payload.next ?? null,
            results: [
              ...(state.paginated?.productsWithPageAndLimit.results ?? []),
              ...action.payload.results,
            ],
            previous: action.payload.previous ?? null,
          },
        },
        displayAllError: "",
        loadMoreError: "",
        isDisplayLoading: false,
        isLoadingMore: false,
      };
    default:
      return state;
  }
}
