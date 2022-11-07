import * as actions from "../../action_types/common/login_prompt_action_types";

export const toggleLoginPromptModalOpen =
  (): actions.ToggleLoginPromptModalActionOpen => {
    return {
      type: actions.TOGGLE_LOGIN_PROMPT_MODAL_OPEN,
    };
  };

export const toggleLoginPromptModalClose =
  (): actions.ToggleLoginPromptModalActionClose => {
    return {
      type: actions.TOGGLE_LOGIN_PROMPT_MODAL_CLOSE,
    };
  };
