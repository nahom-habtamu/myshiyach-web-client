import * as actions from "../action_types/common/validation_error_modal_action_types";

type ValidationErrorModalState = {
    open: boolean,
    content: string
}

const initialState = {
    open: false,
    content: ''
};

export default function validationErrorModalReducer(
    state: ValidationErrorModalState = initialState,
    action: actions.ValidationErrorActionType
): ValidationErrorModalState {
    switch (action.type) {
        case actions.VALIDATION_ERROR_MODAL_OPEN:
            return {
                content: action.payload,
                open: true
            };
        case actions.VALIDATION_ERROR_MODAL_CLOSE:
            return {
                content: "",
                open: false
            };
        default:
            return state;
    }
}
