import { useEffect } from "react";
import { loginUpdateFromPersistence } from "../../core/action_creators/auth/login_action_creators";
import { toggleLoginPromptModalClose } from "../../core/action_creators/common/login_prompt_action_creators";
import { toggleValidationErrorModalClose } from "../../core/action_creators/common/validation_error_modal_action_creators";
import { getSavedPosts } from "../../core/action_creators/product/saved_products_action_creators";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";
import LoadingSpinner from "../components/common/LoadingSpinner";
import LoginPromptModal from "../components/common/LoginPromptModal";
import Routes from "../components/common/Routes";
import ValidationErrorModal from "../components/common/ValidationErrorModal";

const App = () => {
  const dispatch = useAppDispatch();
  const isLoginPrompted = useAppSelector((state) => state.loginPromtModal);
  const validationModalPrompted = useAppSelector((state) => state.validationErrorModal);
  const loginState = useAppSelector((state) => state.login);
  const savedPostsState = useAppSelector((state) => state.savedPosts);

  useEffect(() => {
    dispatch(
      getSavedPosts(
        loginState.result.currentUser?.favoriteProducts ?? [],
        loginState.result.token
      )
    );
    dispatch(loginUpdateFromPersistence());
  }, [dispatch]);


  useEffect(() => {
    if (loginState.result.currentUser !== null) {      
      dispatch(
        getSavedPosts(
          loginState.result.currentUser!.favoriteProducts ?? [],
          loginState.result.token
        )
      );
    }
  }, [loginState.result])


  return (
    <>
      {loginState.isLoading || savedPostsState.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Routes />
          {isLoginPrompted && (
            <LoginPromptModal
              onClose={() => dispatch(toggleLoginPromptModalClose())}
            />
          )}

          {
            validationModalPrompted.open && (
              <ValidationErrorModal
                content={validationModalPrompted.content}
                onClose={() => dispatch(toggleValidationErrorModalClose())}
              />
            )
          }
        </>
      )}
    </>
  );
};

export default App;
