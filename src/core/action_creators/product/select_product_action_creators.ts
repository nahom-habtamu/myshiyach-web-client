import * as actions from "../../action_types/product/select_product_action_types";
import Product from "../../models/product/product";

export const selectProduct = (
  product: Product
): actions.SelectProductActionType => {
  return {
    type: actions.SELECT_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct =
  (): actions.RemoveSelectedProductAction => {
    return { type: actions.REMOVE_SELECTED_PRODUCT };
  };
