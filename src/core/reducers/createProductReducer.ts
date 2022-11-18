import * as createProductActions from "../action_types/product/create_product_action_types";
import Product from "../models/product/product";

export interface CreateProductState {
  product: Product | null;
  error: String;
  isLoading: boolean;
}

const initialState: CreateProductState = {
  product: null,
  error: "",
  isLoading: false,
};

export default function createProductReducer(
  state: CreateProductState = initialState,
  action: createProductActions.CreateProductActionType
): CreateProductState {
  switch (action.type) {
    case createProductActions.CLEAR_CREATE_PRODUCT:
      return initialState;
    case createProductActions.CREATE_PRODUCT_LOADING:
      return {
        product: null,
        error: "",
        isLoading: true,
      };
    case createProductActions.CREATE_PRODUCT_FAILURE:
      return {
        product: null,
        error: action.message,
        isLoading: false,
      };
    case createProductActions.CREATE_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
