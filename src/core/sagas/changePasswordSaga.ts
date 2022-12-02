import * as Effects from "redux-saga/effects";

import { changePassword } from "../repositories/user_repository";

import * as actionCreators from "../action_creators/user/change_password_action_creators";
import * as actionTypes from "../action_types/user/change_password_action_types";

const call: any = Effects.call;

function* onChangePassword(action: actionTypes.ChangePasswordAction) {
  try {
    yield Effects.put(actionCreators.changePasswordLoading());
    let result: boolean = yield call(
      changePassword,
      action.payload.phoneNumber,
      action.payload.password
    );
    yield Effects.put(actionCreators.changePasswordSuccess(result));
  } catch (error: any) {
    yield Effects.put(
      actionCreators.changePasswordFailure(error.response.data.error)
    );
  }
}

function* watchOnChangePassword() {
  yield Effects.takeEvery(actionTypes.CHANGE_PASSWORD, onChangePassword);
}

export default function* changePasswordSaga() {
  yield Effects.all([Effects.fork(watchOnChangePassword)]);
}
