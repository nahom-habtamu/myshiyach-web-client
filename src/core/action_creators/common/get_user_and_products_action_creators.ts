import * as actions from "../../action_types/common/get_user_and_products_action_types";
import User from "../../models/user/user";
import Product from "../../models/product/product";

export const getUserAndProducts = (
  id: string,
  token: string
): actions.GetUserAndProductsAction => {
  return {
    type: actions.GET_USER_AND_PRODUCTS,
    payload: {
      id,
      token,
    },
  };
};

export const getUserAndProductsClear =
  (): actions.GetUserAndProductsClearAction => {
    return { type: actions.GET_USER_AND_PRODUCTS_CLEAR };
  };

export const getUserAndProductsLoading =
  (): actions.GetUserAndProductsLoadingAction => {
    return { type: actions.GET_USER_AND_PRODUCTS_LOADING };
  };

export const getUserAndProductsSuccess = ({
  user,
  products,
}: {
  user: User;
  products: Product[];
}): actions.GetUserAndProductsSuccessAction => {
  return {
    type: actions.GET_USER_AND_PRODUCTS_SUCCESS,
    payload: {
      user,
      products,
    },
  };
};

export const getUserAndProductsFailure = (
  message: string
): actions.GetUserAndProductsFailureAction => {
  return {
    type: actions.GET_USER_AND_PRODUCTS_FAILURE,
    message: message,
  };
};
