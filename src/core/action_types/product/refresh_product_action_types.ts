import Product from "../../models/product/product";

export const REFRESH_PRODUCT = "productActionTypes/REFRESH_PRODUCT";
export interface RefreshProductAction {
  type: typeof REFRESH_PRODUCT;
  payload: {
    id: string;
    token: string;
  };
}

export const REFRESH_PRODUCT_INITIATE =
  "productActionTypes/REFRESH_PRODUCT_INITIATE";
export interface RefreshProductInitateAction {
  type: typeof REFRESH_PRODUCT_INITIATE;
}

export const REFRESH_PRODUCT_LOADING =
  "productActionTypes/REFRESH_PRODUCT_LOADING";
export interface RefreshProductLoadingAction {
  type: typeof REFRESH_PRODUCT_LOADING;
}

export const REFRESH_PRODUCT_SUCCESS =
  "productActionTypes/REFRESH_PRODUCT_SUCCESS";
export interface RefreshProductSuccessAction {
  type: typeof REFRESH_PRODUCT_SUCCESS;
  payload: Product;
}

export const REFRESH_PRODUCT_FAILURE =
  "productActionTypes/REFRESH_PRODUCT_FAILURE";
export interface RefreshProductFailureAction {
  type: typeof REFRESH_PRODUCT_FAILURE;
  message: String;
}

export type RefreshProductActionType =
  | RefreshProductAction
  | RefreshProductInitateAction
  | RefreshProductLoadingAction
  | RefreshProductFailureAction
  | RefreshProductSuccessAction;
