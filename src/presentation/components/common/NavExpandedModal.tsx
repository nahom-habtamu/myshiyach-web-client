import ReactDOM from "react-dom";
import { BiChevronRight } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { loginClear } from "../../../core/action_creators/auth/login_action_creators";
import { logOut } from "../../../core/action_creators/common/log_out_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
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

    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(loginClear());
        logOut();
        history.push(HomePageRoute);
    }

    function renderNavItem(tabName: string, routeName: string) {
        return <NavBarItemWrapperStyled
            active={props.activePage === routeName}
            onClick={() => history.push(routeName)}>
            {tabName}<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
        </NavBarItemWrapperStyled>;
    }
    return ReactDOM.createPortal(
        <>
            <ModalWrapperShadowStyled onClick={() => props.onClose()} onScroll={(e) => e.stopPropagation()} />
            <NavExpandedModelWrapperStyled onClick={(e) => e.stopPropagation()}>
                <DownloadAppButtonStyled>
                    Download App
                </DownloadAppButtonStyled>
                {renderNavItem("Home", HomePageRoute)}
                {renderNavItem("Chat List", ChatListPageRoute)}
                {renderNavItem("Add Post", AddPostPageRoute)}
                {renderNavItem("Saved Posts", SavedPostsPageRoute)}
                {renderNavItem("Setting", SettingPageRoute)}
                {renderNavItem("Contact Us", ContactUsPageRoute)}

                {
                    loginState.result.token.length === 0 ? renderNavItem("Login", LoginPageRoute) :
                        <NavBarItemWrapperStyled
                            active={false}
                            onClick={() => handleLogOut()}>
                            Logout<BiChevronRight size={ICON_SIZE_MEDIUM} style={{ marginTop: '-3px' }} />
                        </NavBarItemWrapperStyled>
                }
            </NavExpandedModelWrapperStyled>
        </>,
        document.getElementById("modal-root") as HTMLElement
    );

}

export default NavExpandedModal