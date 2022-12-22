export const VALIDATION_ERROR_MODAL_OPEN =
  "common/VALIDATION_ERROR_MODAL_OPEN";
export interface ToggleValidationErrorModalActionOpen {
  type: typeof VALIDATION_ERROR_MODAL_OPEN;
  payload: string
}

export const VALIDATION_ERROR_MODAL_CLOSE =
  "common/VALIDATION_ERROR_MODAL_CLOSE";
export interface ToggleValidationErrorModalActionClose {
  type: typeof VALIDATION_ERROR_MODAL_CLOSE;
}

export type ValidationErrorActionType =
  | ToggleValidationErrorModalActionOpen
  | ToggleValidationErrorModalActionClose;
