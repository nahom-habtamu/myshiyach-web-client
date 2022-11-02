import * as displayActions from "../action_types/product/display_paginated_products_action_types";
import * as loadMoreActions from "../action_types/product/load_more_products_action_types";
import DisplayPaginatedProductsResult from "../models/product/display_paginated_products_result";

export interface DisplayPaginatedProductsState {
  paginatedProductResult: DisplayPaginatedProductsResult | null;
  displayAllProductsError: String;
  loadMoreProductsError: String;
  isDisplayLoading: boolean;
  isLoadingMoreProducts: boolean;
}

const initialState: DisplayPaginatedProductsState = {
  paginatedProductResult: null,
  displayAllProductsError: "",
  loadMoreProductsError: "",
  isDisplayLoading: false,
  isLoadingMoreProducts: false,
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
        paginatedProductResult: null,
        displayAllProductsError: "",
        loadMoreProductsError: "",

        isDisplayLoading: true,
        isLoadingMoreProducts: false,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_FAILURE:
      return {
        paginatedProductResult: null,
        displayAllProductsError: action.message,
        loadMoreProductsError: "",

        isDisplayLoading: false,
        isLoadingMoreProducts: false,
      };
    case displayActions.DISPLAY_PAGINATED_PRODUCTS_SUCCESS:
      return {
        paginatedProductResult: action.payload,
        loadMoreProductsError: "",

        displayAllProductsError: "",
        isDisplayLoading: false,
        isLoadingMoreProducts: false,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_LOADING:
      return {
        paginatedProductResult: {
          categories: state.paginatedProductResult?.categories ?? [],
          favoriteProducts:
            state.paginatedProductResult?.favoriteProducts ?? [],
          productsWithPageAndLimit: {
            next:
              state.paginatedProductResult?.productsWithPageAndLimit.next ??
              null,
            results:
              state.paginatedProductResult?.productsWithPageAndLimit.results ??
              [],
            previous:
              state.paginatedProductResult?.productsWithPageAndLimit.previous ??
              null,
          },
        },
        displayAllProductsError: "",
        loadMoreProductsError: "",

        isDisplayLoading: false,
        isLoadingMoreProducts: true,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_FAILURE:
      return {
        paginatedProductResult: state.paginatedProductResult,
        displayAllProductsError: "",
        loadMoreProductsError: action.message,
        isDisplayLoading: false,
        isLoadingMoreProducts: false,
      };
    case loadMoreActions.LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        paginatedProductResult: {
          categories: state.paginatedProductResult?.categories ?? [],
          favoriteProducts:
            state.paginatedProductResult?.favoriteProducts ?? [],
          productsWithPageAndLimit: {
            next: action.payload.next ?? null,
            results: [
              ...(state.paginatedProductResult?.productsWithPageAndLimit
                .results ?? []),
              ...action.payload.results,
            ],
            previous: action.payload.previous ?? null,
          },
        },
        displayAllProductsError: "",
        loadMoreProductsError: "",
        isDisplayLoading: false,
        isLoadingMoreProducts: false,
      };
    default:
      return state;
  }
}
