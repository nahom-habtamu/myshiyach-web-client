import { combineReducers } from "redux";
import authPhoneNumberReducer from "./authPhoneNumberReducer";
import verifyPinReducer from "./verifyPinReducer";
import createUserReducer from "./createUserReducer";
import loginReducer from "./loginReducer";
import displayPaginatedProductsReducer from "./displayPaginatedProductsReducer";
import filterCriteriaReducer from "./filterCriteriaReducer";
import loginPromptModalReducer from "./loginPromptModalReducer";
import getUserByIdReducer from "./getUserByIdReducer";
import getRecommendedProductsReducer from "./getRecommendedProductsReducer";
import refreshProductReducer from "./refreshProductReducer";
import createProductReducer from "./createProductReducer";
import activePageOnMasterNavReducer from "./activePageOnMasterNavReducer";
import selectedProductReducer from "./selectProductReducer";
import getDataNeededToAddPostReducer from "./getDataNeededToAddPostReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  authPhoneNumber: authPhoneNumberReducer,
  verifyPin: verifyPinReducer,
  createUser: createUserReducer,
  displayPaginatedProducts: displayPaginatedProductsReducer,
  filterCriteria: filterCriteriaReducer,
  loginPromtModal: loginPromptModalReducer,
  getUserById: getUserByIdReducer,
  recommendedProducts: getRecommendedProductsReducer,
  refreshProduct: refreshProductReducer,
  createProduct: createProductReducer,
  activePageOnMasterNav: activePageOnMasterNavReducer,
  selectedProduct: selectedProductReducer,
  getDataNeededToAddPost: getDataNeededToAddPostReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
