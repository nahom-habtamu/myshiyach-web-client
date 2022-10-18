import {
  ConfirmationResult,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
  UserCredential,
} from "firebase/auth";

import LoginResult from "../models/login_result";
import axiosInstance from "../utils/api";
import LoginRequest from "../models/login_request";

import firebaseConf from "../config/firebase_config";
import AuthPhoneNumberRequest from "../models/auth_phone_number_request";
import VerifyPinRequest from "../models/verify_pin_request";

export async function login(loginRequest: LoginRequest): Promise<LoginResult> {
  let result = await axiosInstance.post("/auth", loginRequest);
  return result.data as LoginResult;
}

export async function authenticatePhoneNumber(
  authPnRequest: AuthPhoneNumberRequest
): Promise<ConfirmationResult> {
  let result = await signInWithPhoneNumber(
    firebaseConf.auth,
    authPnRequest.phoneNumber,
    authPnRequest.verifier
  );
  return result;
}

export async function verifyOtp(
  verifyPinRequest: VerifyPinRequest
): Promise<UserCredential> {
  var credential = PhoneAuthProvider.credential(
    verifyPinRequest.verificationId,
    verifyPinRequest.pin
  );
  return await signInWithCredential(firebaseConf.auth, credential);
}
