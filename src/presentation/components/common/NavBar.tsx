import { useState } from "react";
import { CiChat1, CiHome, CiSaveDown1, CiSearch, CiSettings } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
    NavBarWrapperStyled, NavTopContentWrapperStyled, NavBarLogoWrapperStyled,
    NavBarLogoStyled, NavBarOtherContentStyled, NavIconsStyled, NavSearchBarWrapperStyled,
    NavSearchInputStyled, NavSearchButtonStyled, ResponsiveIconStyled, NavBarLogoNameStyled
} from "../../styled_components/common/MasterComponentNewComponentsStyled";
import { BiFilter } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { HomePageRoute } from "../../pages/HomePage";
import { SettingPageRoute } from "../../pages/SettingPage";
import { SavedPostsPageRoute } from "../../pages/SavedPosts.Page";
import { AddPostPageRoute } from "../../pages/AddPostPage";
import { ChatListPageRoute } from "../../pages/ChatListPage";

const NavBar = ({ onMenuClicked, activePage }: { onMenuClicked: Function, activePage: string }) => {

    const [searchActive, setSearchActive] = useState(true);

    const history = useHistory();

    return (
        <NavBarWrapperStyled>
            <NavTopContentWrapperStyled>
                <NavBarLogoWrapperStyled>
                    <NavBarLogoStyled src="/icon.png" />
                    <NavBarLogoNameStyled>My Shiyach</NavBarLogoNameStyled>
                </NavBarLogoWrapperStyled>
                <NavBarOtherContentStyled>
                    <NavIconsStyled 
                        active={false}
                        onClick={() => setSearchActive(!searchActive)}>
                        <CiSearch size={ICON_SIZE_LARGE} />
                        Search
                    </NavIconsStyled>
                    <ResponsiveIconStyled 
                        active={false}
                        onClick={() => onMenuClicked()} 
                        isActiveOnSmallScreen={true}>
                        <GiHamburgerMenu size={ICON_SIZE_LARGE} />
                        Menu
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={activePage === HomePageRoute}
                        onClick={() => { history.push(HomePageRoute)}}>
                        <CiHome size={ICON_SIZE_LARGE} />
                        Home
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={activePage === ChatListPageRoute}
                        onClick={() => { history.push(ChatListPageRoute)}}>
                        <CiChat1 size={ICON_SIZE_LARGE} />
                        Chat
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={activePage === AddPostPageRoute}
                        onClick={() => { history.push(AddPostPageRoute)}}>
                        <IoAddSharp size={ICON_SIZE_LARGE} />
                        AddPost
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={activePage === SavedPostsPageRoute}
                        onClick={() => { history.push(SavedPostsPageRoute)}}>
                        <CiSaveDown1 size={ICON_SIZE_LARGE} />
                        Saved
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={activePage === SettingPageRoute}
                        onClick={() => {history.push(SettingPageRoute) }}>
                        <CiSettings size={ICON_SIZE_LARGE} />
                        Settings
                    </ResponsiveIconStyled>
                    <ResponsiveIconStyled 
                        active={false}
                        onClick={() => { }}>
                        <AiOutlineUserAdd size={ICON_SIZE_LARGE} />
                        Login/Register
                    </ResponsiveIconStyled>
                </NavBarOtherContentStyled>
            </NavTopContentWrapperStyled>
            <NavSearchBarWrapperStyled active={searchActive}>
                <NavSearchInputStyled type='text' placeholder="Enter Search Keyword." />
                <NavSearchButtonStyled>
                    <CiSearch size={ICON_SIZE_MEDIUM} />
                </NavSearchButtonStyled>
                <NavSearchButtonStyled>
                    <BiFilter size={ICON_SIZE_MEDIUM} />
                </NavSearchButtonStyled>
            </NavSearchBarWrapperStyled>
        </NavBarWrapperStyled>
    );
};

export default NavBar;