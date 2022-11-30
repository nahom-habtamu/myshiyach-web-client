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
import editProductReducer from "./editProductReducer";
import activePageOnMasterNavReducer from "./activePageOnMasterNavReducer";
import selectedProductReducer from "./selectProductReducer";
import getProductDetailReducer from "./getProductDetailReducer";
import getDataNeededToAddPostReducer from "./getDataNeededToAddPostReducer";
import getDataNeededToEditPostReducer from "./getDataNeededToEditPostReducer";
import getConversationsByUserReducer from "./getConversationsByUserReducer";
import getChatDetailReducer from "./getChatDetailReducer";
import getStrangerUserReducer from "./getStrangerUserReducer";
import addTextMessageReducer from "./addTextMessageReducer";
import addImageMessageReducer from "./addImageMessageReducer";
import markMessagesInConversationAsReadReducer from "./markMessagesInConversationAsReadReducer";
import goToChatReducer from "./goToChatReducer";
import getUserAndProductsReducer from "./getUserAndProductsReducer";

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
  editProduct: editProductReducer,
  activePageOnMasterNav: activePageOnMasterNavReducer,
  selectedProduct: selectedProductReducer,
  getProductDetail: getProductDetailReducer,
  getDataNeededToAddPost: getDataNeededToAddPostReducer,
  getDataNeededToEditPost: getDataNeededToEditPostReducer,
  getConversationsByUser: getConversationsByUserReducer,
  getChatDetail: getChatDetailReducer,
  getStrangerUser: getStrangerUserReducer,
  addTextMessage: addTextMessageReducer,
  addImageMessage: addImageMessageReducer,
  markMessagesAsRead: markMessagesInConversationAsReadReducer,
  goToChat: goToChatReducer,
  getUserAndProducts: getUserAndProductsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
