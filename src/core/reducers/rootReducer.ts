import { combineReducers } from "redux";
import authPhoneNumberReducer from "./authPhoneNumberReducer";
import verifyPinReducer from "./verifyPinReducer";
import createUserReducer from "./createUserReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  authPhoneNumber: authPhoneNumberReducer,
  verifyPin: verifyPinReducer,
  createUser: createUserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
