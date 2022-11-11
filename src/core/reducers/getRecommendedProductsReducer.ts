import * as getUserByIdActions from "../action_types/product/get_recommended_products_action_types";
import Product from "../models/product/product";

export interface GetRecommendedProductsState {
  products: Product[];
  error: String;
  isLoading: boolean;
}

const initialState: GetRecommendedProductsState = {
  products: [],
  error: "",
  isLoading: false,
};

export default function getRecommendedProductsReducer(
  state: GetRecommendedProductsState = initialState,
  action: getUserByIdActions.GetRecommendedProductsActionType
): GetRecommendedProductsState {
  switch (action.type) {
    case getUserByIdActions.GET_RECOMMENDED_PRODUCTS_LOADING:
      return {
        products: [],
        error: "",
        isLoading: true,
      };
    case getUserByIdActions.GET_RECOMMENDED_PRODUCTS_FAILURE:
      return {
        products: [],
        error: action.message,
        isLoading: false,
      };
    case getUserByIdActions.GET_RECOMMENDED_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
