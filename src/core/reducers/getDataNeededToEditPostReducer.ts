import * as getDataForEditPostActions from "../action_types/common/get_data_needed_to_edit_post_action_types";
import MainCategory from "../models/category/main_category";
import Product from "../models/product/product";

export interface GetDataNeededToEditPostState {
  result: {
    cities: string[];
    categories: MainCategory[];
    product: Product;
  } | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetDataNeededToEditPostState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getDataNeededToEditPostReducer(
  state: GetDataNeededToEditPostState = initialState,
  action: getDataForEditPostActions.GetDataNeededToEditPostActionType
): GetDataNeededToEditPostState {
  switch (action.type) {
    case getDataForEditPostActions.GET_DATA_NEEDED_TO_EDIT_POST_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case getDataForEditPostActions.GET_DATA_NEEDED_TO_EDIT_POST_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case getDataForEditPostActions.GET_DATA_NEEDED_TO_EDIT_POST_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
