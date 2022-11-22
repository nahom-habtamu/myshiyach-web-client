import EditProductRequest from "../../models/product/edit_product_request";
import Product from "../../models/product/product";

export const CLEAR_EDIT_PRODUCT = "productActionTypes/CLEAR_EDIT_PRODUCT";
export interface ClearEditProductAction {
  type: typeof CLEAR_EDIT_PRODUCT;
}

export const EDIT_PRODUCT = "productActionTypes/EDIT_PRODUCT";
export interface EditProductAction {
  type: typeof EDIT_PRODUCT;
  payload: {
    id: string;
    imagesToUpload: File[];
    product: EditProductRequest;
    token: string;
  };
}

export const EDIT_PRODUCT_INITIATE = "productActionTypes/EDIT_PRODUCT_INITIATE";
export interface EditProductInitateAction {
  type: typeof EDIT_PRODUCT_INITIATE;
}

export const EDIT_PRODUCT_LOADING = "productActionTypes/EDIT_PRODUCT_LOADING";
export interface EditProductLoadingAction {
  type: typeof EDIT_PRODUCT_LOADING;
}

export const EDIT_PRODUCT_SUCCESS = "productActionTypes/EDIT_PRODUCT_SUCCESS";
export interface EditProductSuccessAction {
  type: typeof EDIT_PRODUCT_SUCCESS;
  payload: Product;
}

export const EDIT_PRODUCT_FAILURE = "productActionTypes/EDIT_PRODUCT_FAILURE";
export interface EditProductFailureAction {
  type: typeof EDIT_PRODUCT_FAILURE;
  message: String;
}

export type EditProductActionType =
  | ClearEditProductAction
  | EditProductAction
  | EditProductInitateAction
  | EditProductLoadingAction
  | EditProductFailureAction
  | EditProductSuccessAction;
