import ReactDOM from "react-dom";
import { BiChevronRight } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../store/storeHooks";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
import { AddPostPageRoute } from "../../pages/AddPostPage";
import { ChatListPageRoute } from "../../pages/ChatListPage";
import { ContactUsPageRoute } from "../../pages/ContactUsPage";
import { HomePageRoute } from "../../pages/HomePage";
import { LoginPageRoute } from "../../pages/LoginPage";
import { SavedPostsPageRoute } from "../../pages/SavedPosts.Page";
import { SettingPageRoute } from "../../pages/SettingPage";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import { DownloadAppButtonStyled, NavBarItemWrapperStyled, NavExpandedModelWrapperStyled } from "../../styled_components/common/NavExpandedModalComponentsStyled";

type NavExpandedProps = {
    onClose: Function;
    activePage: string;
}

const NavExpandedModal = (props: NavExpandedProps) => {
    const loginState = useAppSelector(state => state.login);
    const history = useHistory();
    return ReactDOM.createPortal(
        <>
            <ModalWrapperShadowStyled onClick={() => props.onClose()} />
            <NavExpandedModelWrapperStyled onClick={(e) => e.stopPropagation()}>
                <DownloadAppButtonStyled>
                    Download App
                </DownloadAppButtonStyled>
                <NavBarItemWrapperStyled
                    active={props.activePage === HomePageRoute}
                    onClick={() => history.push(HomePageRoute)}>
                    Home<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled
                    active={props.activePage === ChatListPageRoute}
                    onClick={() => history.push(ChatListPageRoute)}>
                    Chat<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled
                    active={props.activePage === AddPostPageRoute}
                    onClick={() => history.push(AddPostPageRoute)}>
                    Add Post<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled
                    active={props.activePage === SavedPostsPageRoute}
                    onClick={() => history.push(SavedPostsPageRoute)}>
                    Saved Posts<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                <NavBarItemWrapperStyled
                    active={props.activePage === SettingPageRoute}
                    onClick={() => history.push(SettingPageRoute)}>
                    Settings<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
                {
                    loginState.result.token.length === 0 && <NavBarItemWrapperStyled
                        active={props.activePage === LoginPageRoute}
                        onClick={() => history.push(LoginPageRoute)}>
                        Login<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                    </NavBarItemWrapperStyled>
                }
                <NavBarItemWrapperStyled
                    active={props.activePage === ContactUsPageRoute}
                    onClick={() => history.push(ContactUsPageRoute)}>
                    Contact Us<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                </NavBarItemWrapperStyled>
            </NavExpandedModelWrapperStyled>
        </>,
        document.getElementById("modal-root") as HTMLElement
    );
}

export default NavExpandedModal