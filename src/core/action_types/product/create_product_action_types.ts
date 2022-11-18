import CreateProductRequest from "../../models/product/create_product_request";
import Product from "../../models/product/product";

export const CLEAR_CREATE_PRODUCT = "productActionTypes/CLEAR_CREATE_PRODUCT";
export interface ClearCreateProductAction {
  type: typeof CLEAR_CREATE_PRODUCT;
}

export const CREATE_PRODUCT = "productActionTypes/CREATE_PRODUCT";
export interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  payload: {
    product: CreateProductRequest;
    token: string;
    imagesToUpload: File[];
  };
}

export const CREATE_PRODUCT_INITIATE =
  "productActionTypes/CREATE_PRODUCT_INITIATE";
export interface CreateProductInitateAction {
  type: typeof CREATE_PRODUCT_INITIATE;
}

export const CREATE_PRODUCT_LOADING =
  "productActionTypes/CREATE_PRODUCT_LOADING";
export interface CreateProductLoadingAction {
  type: typeof CREATE_PRODUCT_LOADING;
}

export const CREATE_PRODUCT_SUCCESS =
  "productActionTypes/CREATE_PRODUCT_SUCCESS";
export interface CreateProductSuccessAction {
  type: typeof CREATE_PRODUCT_SUCCESS;
  payload: Product;
}

export const CREATE_PRODUCT_FAILURE =
  "productActionTypes/CREATE_PRODUCT_FAILURE";
export interface CreateProductFailureAction {
  type: typeof CREATE_PRODUCT_FAILURE;
  message: String;
}

export type CreateProductActionType =
  | ClearCreateProductAction
  | CreateProductAction
  | CreateProductInitateAction
  | CreateProductLoadingAction
  | CreateProductFailureAction
  | CreateProductSuccessAction;
