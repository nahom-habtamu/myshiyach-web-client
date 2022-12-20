import {
  ConfirmationResult,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
  UserCredential,
} from "firebase/auth";

import LoginResult from "../models/auth/login_result";
import axiosInstance from "../utils/api";
import LoginRequest from "../models/auth/login_request";

import firebaseConf from "../config/firebase_config";
import AuthPhoneNumberRequest from "../models/auth/auth_phone_number_request";
import VerifyPinRequest from "../models/auth/verify_pin_request";
import User from "../models/user/user";

export async function login(loginRequest: LoginRequest): Promise<LoginResult> {
  let result = await axiosInstance.post("/auth", loginRequest);
  return result.data as LoginResult;
}

export async function saveUserToSession(
  loginResult: LoginResult,
  currentUser: User
) {
  if (!localStorage.getItem("loggedInUser")) {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        loginResult,
        currentUser,
      })
    );
  }
}

export function removeUserFromSession() {
  localStorage.removeItem(
    "loggedInUser"
  );
}

export async function getUserFromSession() {
  let data = localStorage.getItem("loggedInUser");
  if (data != null) {
    return JSON.parse(data!) as {
      currentUser: User;
      loginResult: LoginResult;
    };
  }
  return data;
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
