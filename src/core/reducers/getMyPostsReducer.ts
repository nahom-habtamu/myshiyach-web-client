import * as actions from "../action_types/product/get_my_posts_action_types";
import Product from "../models/product/product";

export interface GetMyPostsState {
  products: Product[] | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetMyPostsState = {
  products: null,
  error: "",
  isLoading: false,
};

export default function getMyPostsReducer(
  state: GetMyPostsState = initialState,
  action: actions.GetMyPostsActionType
): GetMyPostsState {
  switch (action.type) {
    case actions.GET_MY_POSTS_LOADING:
      return {
        products: null,
        error: "",
        isLoading: true,
      };
    case actions.GET_MY_POSTS_FAILURE:
      return {
        products: null,
        error: action.message,
        isLoading: false,
      };
    case actions.GET_MY_POSTS_SUCCESS:
      return {
        products: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
