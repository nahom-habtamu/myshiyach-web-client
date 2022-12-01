import * as actions from "../action_types/product/delete_product_action_types";

export interface DeleteProductState {
  id: string | null;
  error: String;
  isLoading: boolean;
}

const initialState: DeleteProductState = {
  id: null,
  error: "",
  isLoading: false,
};

export default function createProductReducer(
  state: DeleteProductState = initialState,
  action: actions.DeleteProductActionType
): DeleteProductState {
  switch (action.type) {
    case actions.CLEAR_DELETE_PRODUCT:
      return initialState;
    case actions.DELETE_PRODUCT_LOADING:
      return {
        id: null,
        error: "",
        isLoading: true,
      };
    case actions.DELETE_PRODUCT_FAILURE:
      return {
        id: null,
        error: action.message,
        isLoading: false,
      };
    case actions.DELETE_PRODUCT_SUCCESS:
      return {
        id: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
