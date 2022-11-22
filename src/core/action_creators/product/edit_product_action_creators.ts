import * as actions from "../../action_types/product/edit-product_action_types";
import EditProductRequest from "../../models/product/edit_product_request";
import Product from "../../models/product/product";

export const clearEditProduct = (): actions.ClearEditProductAction => {
  return {
    type: actions.CLEAR_EDIT_PRODUCT,
  };
};

export const editProduct = ({
  product,
  token,
  id,
  imagesToUpload,
}: {
  product: EditProductRequest;
  token: string;
  id: string;
  imagesToUpload: File[];
}): actions.EditProductAction => {
  return {
    type: actions.EDIT_PRODUCT,
    payload: {
      id,
      product,
      token,
      imagesToUpload,
    },
  };
};

export const editProductLoading = (): actions.EditProductLoadingAction => {
  return { type: actions.EDIT_PRODUCT_LOADING };
};

export const editProductSuccess = (
  product: Product
): actions.EditProductSuccessAction => {
  return { type: actions.EDIT_PRODUCT_SUCCESS, payload: product };
};

export const editProductFailure = (
  message: string
): actions.EditProductFailureAction => {
  return { type: actions.EDIT_PRODUCT_FAILURE, message: message };
};
