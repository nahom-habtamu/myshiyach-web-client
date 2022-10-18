import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { verifyPin } from "../../core/action_creators/auth/verify_pin_action_creators";

import SignUpRequest from "../../core/models/signup_request";
import ActionButton from "../components/common/ActionButton";
import {
  OtpPageHeaderStyled,
  OtpPagePhoneNumberStyled,
} from "../styled_components/OtpPageHeaderStyled";
import { LoginPageRoute } from "./LoginPage";

type OtpPageArguments = {
  signUpRequest: SignUpRequest;
  afterOtpVerificationCompletedCallback: Function;
  verificationId: string;
};

const OtpVerificationPage = () => {
  const location = useLocation();
  const history = useHistory();
  const args = location.state as OtpPageArguments;
  const [otp, setOtp] = useState("");

  const dispatch = useAppDispatch();
  const verifyPinState = useAppSelector((state) => state.verifyPin);
  const createUserState = useAppSelector((state) => state.createUser);

  useEffect(() => {
    if (verifyPinState.successfull) {
      args.afterOtpVerificationCompletedCallback();
    }
  }, [verifyPinState]);

  useEffect(() => {
    if (createUserState.user != null) {
      history.push(LoginPageRoute);
    }
  }, [createUserState]);

  const showActionButtonBasedOnState = () => {
    if (verifyPinState.isLoading || createUserState.isLoading) {
      return <h1>Loading........</h1>;
    } else if (
      verifyPinState.error.length > 0 ||
      createUserState.error.length > 0
    ) {
      console.log("I AM ERROR", verifyPinState.error);
      console.log("I AM ERROR", createUserState.error);
    }
    return (
      <ActionButton
        onPressed={() => {
          dispatch(
            verifyPin({
              pin: otp,
              verificationId: args.verificationId,
            })
          );
        }}
        text="Verify"
      />
    );
  };

  return (
    <>
      <OtpPageHeaderStyled>
        An Authentication Code has been sent to
      </OtpPageHeaderStyled>
      <OtpPagePhoneNumberStyled>
        {args.signUpRequest.phoneNumber}
      </OtpPagePhoneNumberStyled>
      <OtpInput
        value={otp}
        onChange={(otp: string) => setOtp(otp)}
        numInputs={6}
        shouldAutoFocus={true}
        containerStyle="otp-container"
        inputStyle="otp-input"
      />
      {showActionButtonBasedOnState()}
    </>
  );
};

export default OtpVerificationPage;
export const OtpVerificationPageRoute = "/otpPage";
