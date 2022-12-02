import { useEffect } from "react";
import { loginUpdateFromPersistence } from "../../core/action_creators/auth/login_action_creators";
import { toggleLoginPromptModalClose } from "../../core/action_creators/common/login_prompt_action_creators";
import { getSavedPosts } from "../../core/action_creators/product/saved_products_action_creators";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";
import LoadingSpinner from "../components/common/LoadingSpinner";
import LoginPromptModal from "../components/common/LoginPromptModal";
import Routes from "../components/common/Routes";

const App = () => {
  const dispatch = useAppDispatch();
  const isLoginPrompted = useAppSelector((state) => state.loginPromtModal);
  const loginState = useAppSelector((state) => state.login);

  useEffect(() => {
    dispatch(getSavedPosts());
    dispatch(loginUpdateFromPersistence());
  }, [dispatch]);

  return (
    <>
      {loginState.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Routes />
          {isLoginPrompted && (
            <LoginPromptModal
              onClose={() => dispatch(toggleLoginPromptModalClose())}
            />
          )}
        </>
      )}
    </>
  );
};

export default App;
