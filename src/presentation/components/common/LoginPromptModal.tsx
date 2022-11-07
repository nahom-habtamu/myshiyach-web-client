import ReactDOM from "react-dom";
import {
  LoginPromptModalStyled,
  LoginPromptModalTextStyled,
  LoginPromptModalWrapperShadowStyled,
} from "../../styled_components/common/LoginPromptModalStyled";

type LoginPromptModalProps = {
  navigateTo: string;
  onClose: Function;
};

const LoginPromptModal = ({ navigateTo, onClose }: LoginPromptModalProps) => {
  return ReactDOM.createPortal(
    <>
      <LoginPromptModalWrapperShadowStyled />
      <LoginPromptModalStyled>
        Please {<LoginPromptModalTextStyled>Login</LoginPromptModalTextStyled>}{" "}
        Or {<LoginPromptModalTextStyled>Register</LoginPromptModalTextStyled>}{" "}
        to Continue
      </LoginPromptModalStyled>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default LoginPromptModal;
