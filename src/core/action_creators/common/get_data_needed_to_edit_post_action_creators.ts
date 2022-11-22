import * as actions from "../../action_types/common/get_data_needed_to_edit_post_action_types";
import MainCategory from "../../models/category/main_category";
import Product from "../../models/product/product";

export const getDataNeededToEditPost = (
  id: string,
  token: string
): actions.GetDataNeededToEditPostAction => {
  return {
    type: actions.GET_DATA_NEEDED_TO_EDIT_POST,
    payload: {
      id,
      token,
    },
  };
};

export const getDataNeededToEditPostLoading =
  (): actions.GetDataNeededToEditPostLoadingAction => {
    return { type: actions.GET_DATA_NEEDED_TO_EDIT_POST_LOADING };
  };

export const getDataNeededToEditPostSuccess = ({
  cities,
  categories,
  product,
}: {
  cities: string[];
  categories: MainCategory[];
  product: Product;
}): actions.GetDataNeededToEditPostSuccessAction => {
  return {
    type: actions.GET_DATA_NEEDED_TO_EDIT_POST_SUCCESS,
    payload: {
      cities,
      categories,
      product,
    },
  };
};

export const getDataNeededToEditPostFailure = (
  message: string
): actions.GetDataNeededToEditPostFailureAction => {
  return {
    type: actions.GET_DATA_NEEDED_TO_EDIT_POST_FAILURE,
    message: message,
  };
};
