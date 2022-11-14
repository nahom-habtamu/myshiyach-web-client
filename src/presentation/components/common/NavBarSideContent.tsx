import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { RiHomeFill } from "react-icons/ri";
import { ICON_SIZE } from "../../constants/sizes";
import { AddPostPageRoute } from "../../pages/AddPostPage";
import { ChatListPageRoute } from "../../pages/ChatListPage";
import { HomePageRoute } from "../../pages/HomePage";
import { SavedPostsPageRoute } from "../../pages/SavedPosts.Page";
import { SettingsPageRoute } from "../../pages/SettingsPage";
import {
  NavBarLeftSideContentItemStyled,
  NavBarLeftSideContentWrapperStyled,
} from "../../styled_components/nav_bar/NavBarLeftSideContentStyled";

type NavBarSideContentProps = {
  activePage: string;
  onItemTapped: Function;
};

const NavBarSideContent = (props: NavBarSideContentProps) => {
  return (
    <NavBarLeftSideContentWrapperStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === HomePageRoute}
        onClick={() => props.onItemTapped(HomePageRoute)}
      >
        <RiHomeFill size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === ChatListPageRoute}
        onClick={() => props.onItemTapped(ChatListPageRoute)}
      >
        <HiOutlineChatBubbleBottomCenter size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === AddPostPageRoute}
        onClick={() => props.onItemTapped(AddPostPageRoute)}
      >
        <GoDiffAdded size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SavedPostsPageRoute}
        onClick={() => props.onItemTapped(SavedPostsPageRoute)}
      >
        <FaSave size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activePage === SettingsPageRoute}
        onClick={() => props.onItemTapped(SettingsPageRoute)}
      >
        <FiSettings size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
    </NavBarLeftSideContentWrapperStyled>
  );
};

export default NavBarSideContent;
