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
  onEmailChanged: Function;
  onPasswordChanged: Function;
  onPasswordRepeatChanged: Function;
  onFormSubmitted: Function;
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
        />
        <SpaceStyled />
        <AuthInput
          type="text"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onUsernameChanged(e)
          }
          obsecureText={false}
          placeHolder="Username"
        />
        <SpaceStyled />
        <AuthInput
          type="email"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onEmailChanged(e)
          }
          obsecureText={false}
          placeHolder="Email"
        />
        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordChanged(e)
          }
          obsecureText={false}
          placeHolder="Password"
        />
        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onPasswordRepeatChanged(e)
          }
          obsecureText={false}
          placeHolder="Confirm Password"
        />
        <SpaceStyled />
        {
          <>
            <h6 color="red">{"Error"}</h6>
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
