import * as Effects from "redux-saga/effects";

import { authenticatePhoneNumber } from "../repositories/auth_repository";

import * as authPhoneNumberActionCreators from "../action_creators/auth/auth_phone_number_action_creators";
import * as authPhoneNumberActionTypes from "../action_types/auth/authenticate_phone_number_types";
import { ConfirmationResult } from "firebase/auth";

const call: any = Effects.call;

function* onAuthPhoneNumber(
  authPhoneNumberAction: authPhoneNumberActionTypes.AuthPhoneNumberAction
) {
  try {
    yield Effects.put(
      authPhoneNumberActionCreators.authenticatePhoneNumberLoading()
    );
    const data: ConfirmationResult = yield call(
      authenticatePhoneNumber,
      authPhoneNumberAction.payload
    );
    yield Effects.put(
      authPhoneNumberActionCreators.authenticatePhoneNumberSuccess(data)
    );
  } catch (error: any) {
    yield Effects.put(
      authPhoneNumberActionCreators.authenticatePhoneNumberFailure(
        "Phone Verification Failed"
      )
    );
  }
}

function* watchOnAuthPhoneNumber() {
  yield Effects.takeEvery(
    authPhoneNumberActionTypes.AUTH_PHONE_NUMBER,
    onAuthPhoneNumber
  );
}

export default function* authPhoneNumberSaga() {
  yield Effects.all([Effects.fork(watchOnAuthPhoneNumber)]);
}
