import { useHistory } from "react-router-dom";
import { AuthPhoneNumberState } from "../../../core/reducers/authPhoneNumberReducer";
import { LoginPageRoute } from "../../pages/LoginPage";
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

type SignUpPageContentProps = {
  authPhoneNumberState: AuthPhoneNumberState;
  afterVerificationCallback: Function;
  onUsernameChanged: Function;
  onNameChanged: Function;
  onPasswordChanged: Function;
  onPasswordRepeatChanged: Function;
  onFormSubmitted: Function;
  password: string | null;
};

const SignUpPageContent = (props: SignUpPageContentProps) => {
  const history = useHistory();

  const renderSignUpButtonBasedOnState = () => {
    if (props.authPhoneNumberState.isLoading) {
      return <h1>Loading........</h1>;
    } else if (props.authPhoneNumberState.result != null) {
      props.afterVerificationCallback(
        props.authPhoneNumberState.result.verificationId
      );
    } else {
      return <ActionButton text="Continue" onPressed={props.onFormSubmitted} />;
    }
  };

  const userNameValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Username";
    else if (value.length < 10)
      return "Enter Proper Username";
    return null;
  }

  const nameValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Name";
    else if (value.length < 5)
      return "Enter Proper Name";
    return null;
  }

  const passwordValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Password";
    else if (value.length < 6)
      return "Enter Password Greator than 6 characters";
    return null;
  }

  const passwordRepeatValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Password";
    else if (value.length < 6)
      return "Enter Password Greator than 6 characters";
    else if (value !== props.password)
      return "Passwords Don't Match";
    return null;
  }

  return (
    <>
      <LoginPageHeaderOneStyled>Getting Started</LoginPageHeaderOneStyled>
      <LoginPageHeaderTwoStyled>
        Seems like you are new here, Let's setup your profile
      </LoginPageHeaderTwoStyled>
      <AuthInputWrapperStyled>
        <AuthInput
          type="text"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onNameChanged(e)
          }
          obsecureText={false}
          placeHolder="Name"
          validator={nameValidator}
        />
        <SpaceStyled />
        <AuthInput
          type="text"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onUsernameChanged(e)
          }
          obsecureText={false}
          placeHolder="Username"
          validator={userNameValidator}
        />
        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordChanged(e)
          }
          obsecureText={false}
          placeHolder="Password"
          validator={passwordValidator}

        />
        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordRepeatChanged(e)
          }
          obsecureText={false}
          placeHolder="Confirm Password"
          validator={passwordRepeatValidator}
        />
        <SpaceStyled />
        {
          <>
            <div style={{ color: 'red', fontSize: '15px' }}>{props.authPhoneNumberState.error}</div>
            <SpaceStyled />
          </>
        }
        {renderSignUpButtonBasedOnState()}
        <div id="recaptcha-container"></div>
        <AuthToggleAction
          textOne="Already have an account ?"
          textTwo="Login"
          onPressed={() => history.push(LoginPageRoute)}
        />
      </AuthInputWrapperStyled>
    </>
  );
};

export default SignUpPageContent;
