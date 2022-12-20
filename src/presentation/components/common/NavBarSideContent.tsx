import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { RiHomeFill } from "react-icons/ri";
import { toggleLoginPromptModalOpen } from "../../../core/action_creators/common/login_prompt_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
import { AddPostPageRoute } from "../../pages/AddPostPage";
import { ChatListPageRoute } from "../../pages/ChatListPage";
import { HomePageRoute } from "../../pages/HomePage";
import { SavedPostsPageRoute } from "../../pages/SavedPosts.Page";
import { SettingPageRoute } from "../../pages/SettingPage";
import {
  NavBarLeftSideContentItemStyled,
  NavBarLeftSideContentItemUnseenStyled,
  NavBarLeftSideContentWrapperStyled,
} from "../../styled_components/nav_bar/NavBarLeftSideContentStyled";

type NavBarSideContentProps = {
  activePage: string;
  onItemTapped: Function;
  unreadMessagesCount: number;
  collapsed: boolean;
};

const NavBarSideContent = (props: NavBarSideContentProps) => {

  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();


  const handleNavigation = (route : string) => {
    if (loginState.result.token.length === 0) {
      dispatch(toggleLoginPromptModalOpen());
    } else {
      props.onItemTapped(route);
    }
  };

  return (
    <NavBarLeftSideContentWrapperStyled collapsed={props.collapsed}>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === HomePageRoute}
        onClick={() => props.onItemTapped(HomePageRoute)}
      >
        <RiHomeFill size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === ChatListPageRoute}
        onClick={() => handleNavigation(ChatListPageRoute)}
      >
        {props.unreadMessagesCount > 0 && (
          <NavBarLeftSideContentItemUnseenStyled>
            {props.unreadMessagesCount}
          </NavBarLeftSideContentItemUnseenStyled>
        )}
        <HiOutlineChatBubbleBottomCenter size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === AddPostPageRoute}
        onClick={() => handleNavigation(AddPostPageRoute)}
      >
        <GoDiffAdded size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SavedPostsPageRoute}
        onClick={() => handleNavigation(SavedPostsPageRoute)}
      >
        <FaSave size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SettingPageRoute}
        onClick={() => handleNavigation(SettingPageRoute)}
      >
        <FiSettings size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
    </NavBarLeftSideContentWrapperStyled>
  );
};

export default NavBarSideContent;
