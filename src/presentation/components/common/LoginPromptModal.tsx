import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { LoginPageRoute } from "../../pages/LoginPage";
import { SignUpPageRoute } from "../../pages/SignUpPage";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import {
  LoginPromptModalStyled,
  LoginPromptModalTextStyled,
} from "../../styled_components/common/LoginPromptModalStyled";

type LoginPromptModalProps = {
  onClose: Function;
};

const LoginPromptModal = ({ onClose }: LoginPromptModalProps) => {
  return ReactDOM.createPortal(
    <HashRouter>
      <ModalWrapperShadowStyled onClick={() => onClose()} />
      <LoginPromptModalStyled>
        Please{" "}
        {
          <Link to={LoginPageRoute} onClick={() => onClose()}>
            <LoginPromptModalTextStyled>Login</LoginPromptModalTextStyled>
          </Link>
        }{" "}
        Or{" "}
        {
          <Link to={SignUpPageRoute} onClick={() => onClose()}>
            <LoginPromptModalTextStyled>Register</LoginPromptModalTextStyled>
          </Link>
        }{" "}
        to Continue
      </LoginPromptModalStyled>
    </HashRouter>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default LoginPromptModal;
