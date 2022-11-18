import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { LoginState } from "../../../core/reducers/loginReducer";
import { SignUpPageRoute } from "../../pages/SignUpPage";
import {
  AuthInputWrapperStyled,
  SpaceStyled,
} from "../../styled_components/AuthInputStyled";
import {
  LoginPageHeaderOneStyled,
  LoginPageHeaderTwoStyled,
} from "../../styled_components/LoginPageHeaderStyled";
import ActionButton from "../common/ActionButton";
import AuthInput from "../common/AuthInput";
import AuthToggleAction from "../common/AuthToggleAction";
import RememberMeAndForgotPassword from "./RememberMeAndForgotPassword";
import { useAppDispatch } from "../../../store/storeHooks";
import { toggleLoginPromptModalClose } from "../../../core/action_creators/common/login_prompt_action_creators";
import { HomePageRoute } from "../../pages/HomePage";

type LoginPageContentProps = {
  loginState: LoginState;
  onUsernameChanged: Function;
  onPasswordChanged: Function;
  onFormSubmitted: Function;
  onRememberMeChanged: Function;
};

const LoginPageContent = (props: LoginPageContentProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const renderLoginContentBasedOnState = () => {
    if (props.loginState.isLoading) {
      return <h1>Loading........</h1>;
    } else {
      return <ActionButton text="Login" onPressed={props.onFormSubmitted} />;
    }
  };

  useEffect(() => {
    if (props.loginState.result.token.length > 0) {
      history.push(HomePageRoute);
      dispatch(toggleLoginPromptModalClose());
      return;
    }
  }, [props.loginState.result.token]);

  return (
    <>
      <LoginPageHeaderOneStyled>Let's Start shopping</LoginPageHeaderOneStyled>
      <LoginPageHeaderTwoStyled>
        Login to start using the app
      </LoginPageHeaderTwoStyled>

      <AuthInputWrapperStyled>
        <AuthInput
          type="text"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onUsernameChanged(e)
          }
          obsecureText={false}
          placeHolder="Phone Number"
        />
        <SpaceStyled />
        <AuthInput
          type="text"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordChanged(e)
          }
          obsecureText={false}
          placeHolder="Password"
        />
        <SpaceStyled />
        {props.loginState.error.length > 0 && (
          <>
            <h1 color="red">{props.loginState.error}</h1>
            <SpaceStyled />
          </>
        )}
      </AuthInputWrapperStyled>

      <RememberMeAndForgotPassword
        onRememberMeChanged={() => props.onRememberMeChanged()}
      />

      {renderLoginContentBasedOnState()}

      <AuthToggleAction
        textOne="Don't have an account ?"
        textTwo="Sign Up"
        onPressed={() => history.push(SignUpPageRoute)}
      />
    </>
  );
};

export default LoginPageContent;
