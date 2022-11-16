import * as getProductDetailActions from "../action_types/product/get_product_detail_action_types";
import Product from "../models/product/product";
import User from "../models/user/user";

export interface GetProductDetailState {
  result: {
    createdBy: User;
    product: Product;
  } | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetProductDetailState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getProductByIdReducer(
  state: GetProductDetailState = initialState,
  action: getProductDetailActions.GetProductDetailActionType
): GetProductDetailState {
  switch (action.type) {
    case getProductDetailActions.GET_PRODUCT_DETAIL_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case getProductDetailActions.GET_PRODUCT_DETAIL_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case getProductDetailActions.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
