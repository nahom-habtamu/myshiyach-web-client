import { combineReducers } from "redux";
import authPhoneNumberReducer from "./authPhoneNumberReducer";
import verifyPinReducer from "./verifyPinReducer";
import createUserReducer from "./createUserReducer";
import loginReducer from "./loginReducer";
import displayPaginatedProductsReducer from "./displayPaginatedProductsReducer";
import filterCriteriaReducer from "./filterCriteriaReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  authPhoneNumber: authPhoneNumberReducer,
  verifyPin: verifyPinReducer,
  createUser: createUserReducer,
  displayPaginatedProducts: displayPaginatedProductsReducer,
  filterCriteria: filterCriteriaReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
