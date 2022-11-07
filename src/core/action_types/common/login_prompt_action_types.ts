export const TOGGLE_LOGIN_PROMPT_MODAL_OPEN =
  "common/TOGGLE_LOGIN_PROMPT_MODAL_OPEN";
export interface ToggleLoginPromptModalActionOpen {
  type: typeof TOGGLE_LOGIN_PROMPT_MODAL_OPEN;
}

export const TOGGLE_LOGIN_PROMPT_MODAL_CLOSE =
  "common/TOGGLE_LOGIN_PROMPT_MODAL_CLOSE";
export interface ToggleLoginPromptModalActionClose {
  type: typeof TOGGLE_LOGIN_PROMPT_MODAL_CLOSE;
}

export type ToggleLoginPromptActionType =
  | ToggleLoginPromptModalActionOpen
  | ToggleLoginPromptModalActionClose;
