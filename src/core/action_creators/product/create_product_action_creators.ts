import * as actions from "../../action_types/product/create_product_action_types";
import CreateProductRequest from "../../models/product/create_product_request";
import Product from "../../models/product/product";

export const clearCreateProduct = (): actions.ClearCreateProductAction => {
  return {
    type: actions.CLEAR_CREATE_PRODUCT,
  };
};

export const createProduct = (
  product: CreateProductRequest,
  token: string,
  imagesToUpload: File[]
): actions.CreateProductAction => {
  return {
    type: actions.CREATE_PRODUCT,
    payload: {
      product,
      token,
      imagesToUpload,
    },
  };
};

export const createProductLoading = (): actions.CreateProductLoadingAction => {
  return { type: actions.CREATE_PRODUCT_LOADING };
};

export const createProductSuccess = (
  product: Product
): actions.CreateProductSuccessAction => {
  return { type: actions.CREATE_PRODUCT_SUCCESS, payload: product };
};

export const createProductFailure = (
  message: string
): actions.CreateProductFailureAction => {
  return { type: actions.CREATE_PRODUCT_FAILURE, message: message };
};
