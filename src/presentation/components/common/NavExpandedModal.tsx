import ReactDOM from "react-dom";
import { BiChevronRight } from "react-icons/bi";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import { DownloadAppButtonStyled, NavBarItemWrapperStyled, NavExpandedModelWrapperStyled } from "../../styled_components/common/NavExpandedModalComponentsStyled";

type NavExpandedProps = {
    onClose: Function;
}

const NavExpandedModal = (props: NavExpandedProps) => {
    return ReactDOM.createPortal(
        <>
            <ModalWrapperShadowStyled onClick={() => props.onClose()} />
            <NavExpandedModelWrapperStyled onClick={(e) => e.stopPropagation()}>
                <DownloadAppButtonStyled>
                    Download App
                </DownloadAppButtonStyled>
                <NavBarItemWrapperStyled>
                    Home<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled>
                    Chat<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled>
                    Add Post<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled>
                    Saved Posts<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled>
                    Settings<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled>
                    Login<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>                
                <NavBarItemWrapperStyled>
                    Contact Us<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
            </NavExpandedModelWrapperStyled>
        </>,
        document.getElementById("modal-root") as HTMLElement
    );
}

export default NavExpandedModal