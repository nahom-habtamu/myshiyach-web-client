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
import { ForgotPasswordPageRoute } from "../../pages/ForgotPasswordPage";
import PhoneNumberInput from "../common/PhoneNumberInput";

type LoginPageContentProps = {
  loginState: LoginState;
  onUsernameChanged: Function;
  onPasswordChanged: Function;
  onFormSubmitted: Function;
};

const LoginPageContent = (props: LoginPageContentProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.loginState.result.token.length > 0) {
      window.FB.AppEvents.logEvent("login_active");
      history.push(HomePageRoute);
      dispatch(toggleLoginPromptModalClose());
      return;
    }
  }, [props.loginState.result.token]);


  const userNameValidator = (value: string) => {
    if (value.length === 0)
      return "Enter PhoneNumber";
    return null;
  }

  const passwordValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Password";
    else if (value.length < 6)
      return "Enter Password Greator than 6 characters";
    return null;
  }

  return (
    <>
      <LoginPageHeaderOneStyled>Let's Start shopping</LoginPageHeaderOneStyled>
      <LoginPageHeaderTwoStyled>
        Login to start using the app
      </LoginPageHeaderTwoStyled>

      <AuthInputWrapperStyled>

        <PhoneNumberInput
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onUsernameChanged(e)
          }
          placeHolder="Phone Number"
          validator={userNameValidator}
        />

        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordChanged(e)
          }
          obsecureText={true}
          placeHolder="Password"
          validator={passwordValidator}
        />
        <SpaceStyled />
        {props.loginState.error.length > 0 && (
          <>
            <div style={{ color: 'red', fontSize: '15px' }}>{props.loginState.error}</div>
            <SpaceStyled />
          </>
        )}
      </AuthInputWrapperStyled>

      <RememberMeAndForgotPassword onForgotPassword={() => history.push(ForgotPasswordPageRoute)} />

      <ActionButton text='Login' onPressed={props.onFormSubmitted} />

      <AuthToggleAction
        textOne="Don't have an account ?"
        textTwo="Sign Up"
        onPressed={() => history.push(SignUpPageRoute)}
      />
    </>
  );
};

export default LoginPageContent;
