import * as actions from "../action_types/product/saved_products_action_types";
import Product from "../models/product/product";

export interface GetSavedPostsState {
  products: Product[];
  error: String;
  isLoading: boolean;
}

const initialState: GetSavedPostsState = {
  products: [],
  error: "",
  isLoading: false,
};

export default function getSavedPostsReducer(
  state: GetSavedPostsState = initialState,
  action: actions.GetSavedPostsActionType
): GetSavedPostsState {
  switch (action.type) {
    case actions.GET_SAVED_POSTS_LOADING:
      return {
        products: [],
        error: "",
        isLoading: true,
      };
    case actions.GET_SAVED_POSTS_FAILURE:
      return {
        products: [],
        error: action.message,
        isLoading: false,
      };
    case actions.GET_SAVED_POSTS_SUCCESS:
      return {
        products: action.payload,
        error: "",
        isLoading: false,
      };
    case actions.UPDATE_SAVED_POSTS_ITEM:
      return {
        products: [...action.payload.favoriteProducts],
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
