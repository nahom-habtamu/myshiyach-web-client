import * as actions from "../action_types/common/get_user_and_products_action_types";
import Product from "../models/product/product";
import User from "../models/user/user";

export interface GetUserAndProductsState {
  result: {
    user: User;
    products: Product[];
  } | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetUserAndProductsState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getUserAndProductsReducer(
  state: GetUserAndProductsState = initialState,
  action: actions.GetUserAndProductsActionType
): GetUserAndProductsState {
  switch (action.type) {
    case actions.GET_USER_AND_PRODUCTS_CLEAR:
      return initialState;
    case actions.GET_USER_AND_PRODUCTS_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_USER_AND_PRODUCTS_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_USER_AND_PRODUCTS_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
