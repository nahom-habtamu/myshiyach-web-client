import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { RiHomeFill } from "react-icons/ri";
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
        onClick={() => props.onItemTapped(ChatListPageRoute)}
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
        onClick={() => props.onItemTapped(AddPostPageRoute)}
      >
        <GoDiffAdded size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SavedPostsPageRoute}
        onClick={() => props.onItemTapped(SavedPostsPageRoute)}
      >
        <FaSave size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SettingPageRoute}
        onClick={() => props.onItemTapped(SettingPageRoute)}
      >
        <FiSettings size={ICON_SIZE_MEDIUM} />
      </NavBarLeftSideContentItemStyled>
    </NavBarLeftSideContentWrapperStyled>
  );
};

export default NavBarSideContent;
