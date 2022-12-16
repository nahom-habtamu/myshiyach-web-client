import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authenticatePhoneNumber } from "../../core/action_creators/auth/auth_phone_number_action_creators";
import { createUser } from "../../core/action_creators/user/create_user_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import firebaseConfig from "../../core/config/firebase_config";
import SignUpPageContent from "../components/sign_up/SignUpPageContent";
import { OtpVerificationPageRoute } from "./OtpVerificationPage";

const SignUpPage = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  const authPhoneNumberState = useAppSelector((state) => state.authPhoneNumber);

  const [name, setName] = useState<string | null>("");
  const [userName, setUserName] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string | null>("");

  const handleNameInputChanged = (e: any) => {
    setName(e.target.value);
  };

  const handleUserNameInputChanged = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePasswordInputChanged = (e: any) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatInputChanged = (e: any) => {
    setPasswordRepeat(e.target.value);
  };

  const handleSignUpSubmission = () => {
    if (userName && password && passwordRepeat && name) {
      window.recaptchaVerifier = new firebaseConfig.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
        },
        firebaseConfig.auth
      );
      dispatch(
        authenticatePhoneNumber({
          phoneNumber: userName!,
          verifier: window.recaptchaVerifier,
        })
      );
    }
  };

  const handleAfterPhoneNumberVerified = (verificationId: string) => {
    const signUpRequest = {
      fullName: name!,
      password: password!,
      phoneNumber: userName!,
    };

    console.log(signUpRequest);
    

    const afterOtpVerificationCompletedCallback = () => {
      dispatch(createUser(signUpRequest));
    };

    const otpPageArgs = {
      phoneNumber: signUpRequest.phoneNumber,
      afterOtpVerificationCompletedCallback,
      verificationId,
    };

    history.push({
      pathname: OtpVerificationPageRoute,
      state: otpPageArgs,
    });
  };

  return (
    <SignUpPageContent
      password={password}
      authPhoneNumberState={authPhoneNumberState}
      afterVerificationCallback={handleAfterPhoneNumberVerified}
      onPasswordChanged={handlePasswordInputChanged}
      onUsernameChanged={handleUserNameInputChanged}
      onNameChanged={handleNameInputChanged}
      onPasswordRepeatChanged={handlePasswordRepeatInputChanged}
      onFormSubmitted={handleSignUpSubmission}
    />
  );
};

export default SignUpPage;
export const SignUpPageRoute = "/signup";
