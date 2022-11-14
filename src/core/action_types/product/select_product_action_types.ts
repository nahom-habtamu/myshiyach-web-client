import Product from "../../models/product/product";

export const SELECT_PRODUCT = "productActionTypes/SELECT_PRODUCT";
export interface SelectProductAction {
  type: typeof SELECT_PRODUCT;
  payload: Product;
}

export const REMOVE_SELECTED_PRODUCT =
  "productActionTypes/REMOVE_SELECTED_PRODUCT";
export interface RemoveSelectedProductAction {
  type: typeof REMOVE_SELECTED_PRODUCT;
}

export type SelectProductActionType =
  | SelectProductAction
  | RemoveSelectedProductAction;
