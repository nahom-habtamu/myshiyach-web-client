import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import { ValidationErrorModalStyled, ValidationErrorModalTextStyled } from "../../styled_components/common/ValidationModalComponentsStyled";

const ValidationErrorModal = ({ onClose, content }: { onClose: Function, content: string }) => {
    return ReactDOM.createPortal(
        <HashRouter>
            <ModalWrapperShadowStyled onClick={() => onClose()} />
            <ValidationErrorModalStyled>
                <ValidationErrorModalTextStyled>{content}</ValidationErrorModalTextStyled>
            </ValidationErrorModalStyled>
        </HashRouter>,
        document.getElementById("modal-root") as HTMLElement
    );
}


export default ValidationErrorModal;