import * as selectProductTypes from "../action_types/product/select_product_action_types";
import Product from "../models/product/product";

export default function selectProductReducer(
  state: Product | null = null,
  action: selectProductTypes.SelectProductActionType
): Product | null {
  switch (action.type) {
    case selectProductTypes.SELECT_PRODUCT:
      return action.payload;
    case selectProductTypes.REMOVE_SELECTED_PRODUCT:
      return null;
    default:
      return state;
  }
}
