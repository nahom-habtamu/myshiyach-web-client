import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { RiHomeFill } from "react-icons/ri";
import {
  NavBarLeftSideContentItemStyled,
  NavBarLeftSideContentWrapperStyled,
} from "../../styled_components/nav_bar/NavBarLeftSideContentStyled";

type NavBarSideContentProps = {
  activeBar: number;
};

const NavBarSideContent = (props: NavBarSideContentProps) => {
  return (
    <NavBarLeftSideContentWrapperStyled>
      <NavBarLeftSideContentItemStyled isActive={props.activeBar === 0}>
        <RiHomeFill size="1.8em" />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled isActive={props.activeBar === 1}>
        <HiOutlineChatBubbleBottomCenter size="1.8em" />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled isActive={props.activeBar === 2}>
        <GoDiffAdded size="1.8em" />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled isActive={props.activeBar === 3}>
        <FaSave size="1.8em" />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled isActive={props.activeBar === 4}>
        <FiSettings size="1.8em" />
      </NavBarLeftSideContentItemStyled>
    </NavBarLeftSideContentWrapperStyled>
  );
};

export default NavBarSideContent;
