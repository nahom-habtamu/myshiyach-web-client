import * as actions from "../../action_types/product/get_product_detail_action_types";
import Product from "../../models/product/product";
import User from "../../models/user/user";

export const getProductDetail = (
  id: string,
  token: string
): actions.GetProductDetailAction => {
  return {
    type: actions.GET_PRODUCT_DETAIL,
    payload: {
      id,
      token,
    },
  };
};

export const getProductDetailLoading =
  (): actions.GetProductDetailLoadingAction => {
    return { type: actions.GET_PRODUCT_DETAIL_LOADING };
  };

export const getProductDetailSuccess = (response: {
  product: Product;
  createdBy: User;
}): actions.GetProductDetailSuccessAction => {
  return {
    type: actions.GET_PRODUCT_DETAIL_SUCCESS,
    payload: response,
  };
};

export const getProductDetailFailure = (
  message: string
): actions.GetProductDetailFailureAction => {
  return {
    type: actions.GET_PRODUCT_DETAIL_FAILURE,
    message: message,
  };
};
