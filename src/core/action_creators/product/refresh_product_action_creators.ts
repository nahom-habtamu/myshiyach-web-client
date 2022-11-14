import * as actions from "../../action_types/product/refresh_product_action_types";
import Product from "../../models/product/product";

export const clearRefreshProduct = (): actions.ClearRefreshProductAction => {
  return {
    type: actions.CLEAR_REFRESH_PRODUCT,
  };
};

export const refreshProduct = (
  id: string,
  token: string
): actions.RefreshProductAction => {
  return {
    type: actions.REFRESH_PRODUCT,
    payload: {
      id,
      token,
    },
  };
};

export const refreshProductLoading =
  (): actions.RefreshProductLoadingAction => {
    return { type: actions.REFRESH_PRODUCT_LOADING };
  };

export const refreshProductSuccess = (
  product: Product
): actions.RefreshProductSuccessAction => {
  return { type: actions.REFRESH_PRODUCT_SUCCESS, payload: product };
};

export const refreshProductFailure = (
  message: string
): actions.RefreshProductFailureAction => {
  return { type: actions.REFRESH_PRODUCT_FAILURE, message: message };
};
