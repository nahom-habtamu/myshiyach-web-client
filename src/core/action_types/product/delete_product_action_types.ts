export const CLEAR_DELETE_PRODUCT = "productActionTypes/CLEAR_DELETE_PRODUCT";
export interface ClearDeleteProductAction {
  type: typeof CLEAR_DELETE_PRODUCT;
}

export const DELETE_PRODUCT = "productActionTypes/DELETE_PRODUCT";
export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  payload: {
    id: string;
    token: string;
  };
}

export const DELETE_PRODUCT_INITIATE =
  "productActionTypes/DELETE_PRODUCT_INITIATE";
export interface DeleteProductInitateAction {
  type: typeof DELETE_PRODUCT_INITIATE;
}

export const DELETE_PRODUCT_LOADING =
  "productActionTypes/DELETE_PRODUCT_LOADING";
export interface DeleteProductLoadingAction {
  type: typeof DELETE_PRODUCT_LOADING;
}

export const DELETE_PRODUCT_SUCCESS =
  "productActionTypes/DELETE_PRODUCT_SUCCESS";
export interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: string;
}

export const DELETE_PRODUCT_FAILURE =
  "productActionTypes/DELETE_PRODUCT_FAILURE";
export interface DeleteProductFailureAction {
  type: typeof DELETE_PRODUCT_FAILURE;
  message: String;
}

export type DeleteProductActionType =
  | ClearDeleteProductAction
  | DeleteProductAction
  | DeleteProductInitateAction
  | DeleteProductLoadingAction
  | DeleteProductFailureAction
  | DeleteProductSuccessAction;
