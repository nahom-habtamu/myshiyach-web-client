import * as actions from "../../action_types/common/log_out_action_types";
import { removeUserFromSession } from "../../repositories/auth_repository";

export const logOut =
  (): actions.LogOutActionTypes => {
    removeUserFromSession()
    return {
      type: actions.LOG_OUT,
    };
  };