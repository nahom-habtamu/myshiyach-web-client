import * as actions from "../../action_types/common/get_data_needed_to_add_post_action_types";
import MainCategory from "../../models/category/main_category";

export const getDataNeededToAddPost =
  (): actions.GetDataNeededToAddPostAction => {
    return {
      type: actions.GET_DATA_NEEDED_TO_ADD_POST,
    };
  };

export const getDataNeededToAddPostLoading =
  (): actions.GetDataNeededToAddPostLoadingAction => {
    return { type: actions.GET_DATA_NEEDED_TO_ADD_POST_LOADING };
  };

export const getDataNeededToAddPostSuccess = ({
  cities,
  categories,
}: {
  cities: string[];
  categories: MainCategory[];
}): actions.GetDataNeededToAddPostSuccessAction => {
  return {
    type: actions.GET_DATA_NEEDED_TO_ADD_POST_SUCCESS,
    payload: {
      cities,
      categories,
    },
  };
};

export const getDataNeededToAddPostFailure = (
  message: string
): actions.GetDataNeededToAddPostFailureAction => {
  return {
    type: actions.GET_DATA_NEEDED_TO_ADD_POST_FAILURE,
    message: message,
  };
};
