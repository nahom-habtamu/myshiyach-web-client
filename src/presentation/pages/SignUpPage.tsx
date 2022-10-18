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

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleNameInputChanged = (e: any) => {
    setName(e.target.value);
  };

  const handleUserNameInputChanged = (e: any) => {
    setUserName(e.target.value);
  };

  const handleEmailInputChanged = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChanged = (e: any) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatInputChanged = (e: any) => {
    setPasswordRepeat(e.target.value);
  };

  const handleSignUpSubmission = () => {
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
  };

  const handleAfterPhoneNumberVerified = (verificationId: string) => {
    const signUpRequest = {
      fullName: name,
      password: password,
      phoneNumber: userName,
    };

    // WILL CALL THE SIGN UP API AFTER OTP VERIFICATION IS COMPLETED
    const afterOtpVerificationCompletedCallback = () => {
      dispatch(createUser(signUpRequest));
    };

    const otpPageArgs = {
      signUpRequest,
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
      authPhoneNumberState={authPhoneNumberState}
      afterVerificationCallback={handleAfterPhoneNumberVerified}
      onPasswordChanged={handlePasswordInputChanged}
      onUsernameChanged={handleUserNameInputChanged}
      onEmailChanged={handleEmailInputChanged}
      onNameChanged={handleNameInputChanged}
      onPasswordRepeatChanged={handlePasswordRepeatInputChanged}
      onFormSubmitted={handleSignUpSubmission}
    />
  );
};

export default SignUpPage;
export const SignUpPageRoute = "/signup";
