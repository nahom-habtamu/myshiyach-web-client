import * as editProductActions from "../action_types/product/edit-product_action_types";
import Product from "../models/product/product";

export interface EditProductState {
  product: Product | null;
  error: String;
  isLoading: boolean;
}

const initialState: EditProductState = {
  product: null,
  error: "",
  isLoading: false,
};

export default function editProductReducer(
  state: EditProductState = initialState,
  action: editProductActions.EditProductActionType
): EditProductState {
  switch (action.type) {
    case editProductActions.CLEAR_EDIT_PRODUCT:
      return initialState;
    case editProductActions.EDIT_PRODUCT_LOADING:
      return {
        product: null,
        error: "",
        isLoading: true,
      };
    case editProductActions.EDIT_PRODUCT_FAILURE:
      return {
        product: null,
        error: action.message,
        isLoading: false,
      };
    case editProductActions.EDIT_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
