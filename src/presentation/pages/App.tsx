import { toggleLoginPromptModalClose } from "../../core/action_creators/common/login_prompt_action_creators";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";
import LoginPromptModal from "../components/common/LoginPromptModal";
import Routes from "../components/common/Routes";

const App = () => {
  const dispatch = useAppDispatch();

  const isLoginPrompted = useAppSelector((state) => state.loginPromtModal);

  return (
    <>
      <Routes />
      {isLoginPrompted && (
        <LoginPromptModal
          onClose={() => dispatch(toggleLoginPromptModalClose())}
        />
      )}
    </>
  );
};

export default App;
