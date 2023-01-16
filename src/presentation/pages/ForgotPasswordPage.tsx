import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ActionButton from "../components/common/ActionButton";
import AuthInput from "../components/common/AuthInput";
import {
  AuthInputWrapperStyled,
  SpaceStyled,
} from "../styled_components/AuthInputStyled";
import {
  LoginPageHeaderOneStyled,
  LoginPageHeaderTwoStyled,
} from "../styled_components/LoginPageHeaderStyled";
import firebaseConfig from "../../core/config/firebase_config";
import { useState } from "react";
import { authenticatePhoneNumber } from "../../core/action_creators/auth/auth_phone_number_action_creators";
import { useHistory } from "react-router-dom";
import { OtpVerificationPageRoute } from "./OtpVerificationPage";
import { ChangePasswordPageRoute } from "./ChangePasswordPage";
import { changePasswordClear } from "../../core/action_creators/user/change_password_action_creators";
import PhoneNumberInput from "../components/common/PhoneNumberInput";
import useScrollToTop from "../custom_hooks/useScrollToTop";

const ForgotPasswordPage = () => {
  const history = useHistory();
  useScrollToTop();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string | null>("");

  const authPhoneNumberState = useAppSelector((state) => state.authPhoneNumber);

  useEffect(() => {
    dispatch(changePasswordClear());
  }, [dispatch]);

  const handleForgotPassSubmission = () => {
    if (userName) {
      window.recaptchaVerifier = new firebaseConfig.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
        },
        firebaseConfig.auth
      );
      dispatch(
        authenticatePhoneNumber({
          phoneNumber: userName,
          verifier: window.recaptchaVerifier,
        })
      );
    }
  };

  const afterVerificationCallback = (verificationId: string) => {
    const afterOtpVerificationCompletedCallback = () => {
      history.push({
        pathname: ChangePasswordPageRoute,
        state: {
          phoneNumber: userName,
        },
      });
    };

    const otpPageArgs = {
      phoneNumber: userName,
      afterOtpVerificationCompletedCallback,
      verificationId,
    };

    history.push({
      pathname: OtpVerificationPageRoute,
      state: otpPageArgs,
    });
  };

  const renderButtonBasedOnState = () => {
    if (authPhoneNumberState.isLoading) {
      return <h1>Loading........</h1>;
    } else if (authPhoneNumberState.result != null) {
      afterVerificationCallback(authPhoneNumberState.result.verificationId);
    } else {
      return (
        <ActionButton text="Continue" onPressed={handleForgotPassSubmission} />
      );
    }
  };

  const userNameValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Phone Number";
    return null;
  }

  return (
    <>
      <LoginPageHeaderOneStyled>Lost Your Password</LoginPageHeaderOneStyled>
      <LoginPageHeaderTwoStyled>Let's recreate it now</LoginPageHeaderTwoStyled>
      <AuthInputWrapperStyled>
        <PhoneNumberInput
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          placeHolder="Phone Number"
          validator={userNameValidator}
        />
        <SpaceStyled />
        {
          <>
            <h6 color="red">{authPhoneNumberState.error}</h6>
            <SpaceStyled />
          </>
        }
        {renderButtonBasedOnState()}
        <div id="recaptcha-container"></div>
      </AuthInputWrapperStyled>
    </>
  );
};

export default ForgotPasswordPage;
export const ForgotPasswordPageRoute = "/forgotPassword";
