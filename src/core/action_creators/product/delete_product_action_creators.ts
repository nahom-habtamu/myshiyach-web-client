import * as actions from "../../action_types/product/delete_product_action_types";

export const clearDeleteProduct = (): actions.ClearDeleteProductAction => {
  return {
    type: actions.CLEAR_DELETE_PRODUCT,
  };
};

export const deleteProduct = (
  id: string,
  token: string
): actions.DeleteProductAction => {
  return {
    type: actions.DELETE_PRODUCT,
    payload: {
      id,
      token,
    },
  };
};

export const deleteProductLoading = (): actions.DeleteProductLoadingAction => {
  return { type: actions.DELETE_PRODUCT_LOADING };
};

export const deleteProductSuccess = (
  id: string
): actions.DeleteProductSuccessAction => {
  return { type: actions.DELETE_PRODUCT_SUCCESS, payload: id };
};

export const deleteProductFailure = (
  message: string
): actions.DeleteProductFailureAction => {
  return { type: actions.DELETE_PRODUCT_FAILURE, message: message };
};
