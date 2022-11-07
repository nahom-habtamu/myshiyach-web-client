import * as loginPromptModalActions from "../action_types/common/login_prompt_action_types";

export default function loginPromptModalReducer(
  state: boolean = false,
  action: loginPromptModalActions.ToggleLoginPromptActionType
): boolean {
  switch (action.type) {
    case loginPromptModalActions.TOGGLE_LOGIN_PROMPT_MODAL_OPEN:
      return true;
    case loginPromptModalActions.TOGGLE_LOGIN_PROMPT_MODAL_CLOSE:
      return false;
    default:
      return state;
  }
}
