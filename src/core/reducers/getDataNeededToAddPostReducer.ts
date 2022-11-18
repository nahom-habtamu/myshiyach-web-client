import * as getDataForAddPostActions from "../action_types/common/get_data_needed_to_add_post_action_types";
import MainCategory from "../models/category/main_category";

export interface GetDataNeededToAddPostState {
  result: {
    cities: string[];
    categories: MainCategory[];
  } | null;
  error: String;
  isLoading: boolean;
}

const initialState: GetDataNeededToAddPostState = {
  result: null,
  error: "",
  isLoading: false,
};

export default function getDataNeededToAddPostReducer(
  state: GetDataNeededToAddPostState = initialState,
  action: getDataForAddPostActions.GetDataNeededToAddPostActionType
): GetDataNeededToAddPostState {
  switch (action.type) {
    case getDataForAddPostActions.GET_DATA_NEEDED_TO_ADD_POST_LOADING:
      return {
        result: null,
        error: "",
        isLoading: true,
      };
    case getDataForAddPostActions.GET_DATA_NEEDED_TO_ADD_POST_FAILURE:
      return {
        result: null,
        error: action.message,
        isLoading: false,
      };
    case getDataForAddPostActions.GET_DATA_NEEDED_TO_ADD_POST_SUCCESS:
      return {
        result: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
