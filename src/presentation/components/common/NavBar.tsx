import { useEffect, useState } from "react";
import { CiChat1, CiHome, CiSaveDown1, CiSearch, CiSettings } from "react-icons/ci";
import { IoAddSharp, IoClose } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
    NavBarWrapperStyled, NavTopContentWrapperStyled, NavBarLogoWrapperStyled,
    NavBarLogoStyled, NavBarOtherContentStyled, NavIconsStyled, NavSearchBarWrapperStyled,
    NavSearchInputStyled, NavSearchButtonStyled, ResponsiveIconStyled, NavBarLogoNameStyled, NavClearSearchButtonStyled
} from "../../styled_components/common/MasterComponentsStyled";
import { BiFilter } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { HomePageRoute } from "../../pages/HomePage";
import { SettingPageRoute } from "../../pages/SettingPage";
import { SavedPostsPageRoute } from "../../pages/SavedPosts.Page";
import { AddPostPageRoute } from "../../pages/AddPostPage";
import { ChatListPageRoute } from "../../pages/ChatListPage";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { modifyFilterCriteria } from "../../../core/action_creators/product/filter_criteria_action_creators";
import FilterCriteria from "../../../core/models/filter/filter_criteria";
import { LoginPageRoute } from "../../pages/LoginPage";

const NavBar = ({ onMenuClicked, activePage, onFilterButtonClicked }: { onMenuClicked: Function, activePage: string, onFilterButtonClicked: Function }) => {

    const filterCriteria = useAppSelector((state) => state.filterCriteria);
    const login = useAppSelector((state) => state.login);

    const [keyword, setKeyword] = useState("");
    const [searchActive, setSearchActive] = useState(true);

    const history = useHistory();
    const dispatch = useAppDispatch();


    useEffect(() => {
        setKeyword(filterCriteria?.keyword ?? "");
    }, [])


    const handleSearchClicked = () => {
        if (keyword.length > 0) {
            dispatch(
                modifyFilterCriteria({
                    ...filterCriteria,
                    keyword,
                } as FilterCriteria)
            );
            if (activePage !== HomePageRoute) {
                history.push(HomePageRoute);
                window.FB.AppEvents.logEvent("search_applied", {
                    KeyWord: keyword
                });
            }
        }
    };

    const handleRemoveSearchClicked = () => {
        setKeyword("");
        dispatch(
            modifyFilterCriteria({
                ...filterCriteria,
                keyword: null,
            } as FilterCriteria)
        );
        if (activePage !== HomePageRoute) {
            history.push(HomePageRoute);
        }
    };

    return (
        <NavBarWrapperStyled>
            <NavTopContentWrapperStyled>
                <NavBarLogoWrapperStyled onClick={() => history.push(HomePageRoute)}>
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
                        onClick={() => { history.push(HomePageRoute) }}>
                        <CiHome size={ICON_SIZE_LARGE} />
                        Home
                    </ResponsiveIconStyled>
                    {
                        login.result.token.length !== 0 &&
                        <ResponsiveIconStyled
                            active={activePage === ChatListPageRoute}
                            onClick={() => { history.push(ChatListPageRoute) }}>
                            <CiChat1 size={ICON_SIZE_LARGE} />
                            Chat
                        </ResponsiveIconStyled>
                    }
                    {
                        login.result.token.length !== 0 &&
                        <ResponsiveIconStyled
                            active={activePage === AddPostPageRoute}
                            onClick={() => { history.push(AddPostPageRoute) }}>
                            <IoAddSharp size={ICON_SIZE_LARGE} />
                            AddPost
                        </ResponsiveIconStyled>
                    }
                    {
                        login.result.token.length !== 0 &&
                        <ResponsiveIconStyled
                            active={activePage === SavedPostsPageRoute}
                            onClick={() => { history.push(SavedPostsPageRoute) }}>
                            <CiSaveDown1 size={ICON_SIZE_LARGE} />
                            Saved
                        </ResponsiveIconStyled>
                    }
                    {
                        login.result.token.length !== 0 &&

                        <ResponsiveIconStyled
                            active={activePage === SettingPageRoute}
                            onClick={() => { history.push(SettingPageRoute) }}>
                            <CiSettings size={ICON_SIZE_LARGE} />
                            Settings
                        </ResponsiveIconStyled>
                    }
                    {
                        login.result.token.length === 0 &&
                        <ResponsiveIconStyled
                            active={false}
                            onClick={() => {
                                history.push(LoginPageRoute);
                            }}>
                            <AiOutlineUserAdd size={ICON_SIZE_LARGE} />
                            Login/Register
                        </ResponsiveIconStyled>
                    }
                </NavBarOtherContentStyled>
            </NavTopContentWrapperStyled>
            <NavSearchBarWrapperStyled active={searchActive}>
                <NavClearSearchButtonStyled onClick={handleRemoveSearchClicked}>
                    <IoClose size={ICON_SIZE_MEDIUM} />
                </NavClearSearchButtonStyled>
                <NavSearchInputStyled
                    type='text'
                    placeholder="Enter Search Keyword."
                    value={keyword}
                    onChange={(e: any) => setKeyword(e.target.value)}
                />
                <NavSearchButtonStyled
                    disabled={keyword.length === 0}
                    onClick={handleSearchClicked}>
                    <CiSearch size={ICON_SIZE_MEDIUM} />
                </NavSearchButtonStyled>
                <NavSearchButtonStyled onClick={() => onFilterButtonClicked()}>
                    <BiFilter size={ICON_SIZE_MEDIUM} />
                </NavSearchButtonStyled>
            </NavSearchBarWrapperStyled>
        </NavBarWrapperStyled>
    );
};

export default NavBar;