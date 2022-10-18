import * as Effects from "redux-saga/effects";

import { verifyOtp } from "../repositories/auth_repository";

import * as verifyPinCreators from "../action_creators/auth/verify_pin_action_creators";
import * as verifyPinTypes from "../action_types/auth/verify_pin_action_types";
import { UserCredential } from "firebase/auth";

const call: any = Effects.call;

function* onVerifyPin(verifyPin: verifyPinTypes.VerifyPinAction) {
  try {
    yield Effects.put(verifyPinCreators.verifyPinLoading());
    const data: UserCredential = yield call(verifyOtp, verifyPin.payload);
    yield Effects.put(verifyPinCreators.verifyPinSuccess());
  } catch (error: any) {
    yield Effects.put(
      verifyPinCreators.verifyPinFailure("Verifying Pin Failed")
    );
  }
}

function* watchOnVerifyPin() {
  yield Effects.takeEvery(verifyPinTypes.VERIFY_PIN, onVerifyPin);
}

export default function* verifyPinSaga() {
  yield Effects.all([Effects.fork(watchOnVerifyPin)]);
}
