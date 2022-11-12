import * as refreshProductActions from "../action_types/product/refresh_product_action_types";
import Product from "../models/product/product";

export interface RefreshProductState {
  product: Product | null;
  error: String;
  isLoading: boolean;
}

const initialState: RefreshProductState = {
  product: null,
  error: "",
  isLoading: false,
};

export default function refreshProductReducer(
  state: RefreshProductState = initialState,
  action: refreshProductActions.RefreshProductActionType
): RefreshProductState {
  switch (action.type) {
    case refreshProductActions.REFRESH_PRODUCT_LOADING:
      return {
        product: null,
        error: "",
        isLoading: true,
      };
    case refreshProductActions.REFRESH_PRODUCT_FAILURE:
      return {
        product: null,
        error: action.message,
        isLoading: false,
      };
    case refreshProductActions.REFRESH_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
