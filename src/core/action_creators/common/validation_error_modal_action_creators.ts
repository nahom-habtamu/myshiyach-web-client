import * as actions from "../../action_types/common/validation_error_modal_action_types";

export const toggleValidationErrorModalOpen =
  (content: string): actions.ToggleValidationErrorModalActionOpen => {
    return {
      type: actions.VALIDATION_ERROR_MODAL_OPEN,
      payload: content
    };
  };

export const toggleValidationErrorModalClose =
  (): actions.ToggleValidationErrorModalActionClose => {
    return {
      type: actions.VALIDATION_ERROR_MODAL_CLOSE,
    };
  };
