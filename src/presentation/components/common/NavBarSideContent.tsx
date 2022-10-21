import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { RiHomeFill } from "react-icons/ri";
import { ICON_SIZE } from "../../constants/sizes";
import {
  NavBarLeftSideContentItemStyled,
  NavBarLeftSideContentWrapperStyled,
} from "../../styled_components/nav_bar/NavBarLeftSideContentStyled";

type NavBarSideContentProps = {
  activeBar: number;
  onItemTapped: Function;
};

const NavBarSideContent = (props: NavBarSideContentProps) => {
  return (
    <NavBarLeftSideContentWrapperStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activeBar === 0}
        onClick={() => props.onItemTapped(0)}
      >
        <RiHomeFill size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activeBar === 1}
        onClick={() => props.onItemTapped(1)}
      >
        <HiOutlineChatBubbleBottomCenter size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activeBar === 2}
        onClick={() => props.onItemTapped(2)}
      >
        <GoDiffAdded size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activeBar === 3}
        onClick={() => props.onItemTapped(3)}
      >
        <FaSave size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
      <NavBarLeftSideContentItemStyled
        isActive={props.activeBar === 4}
        onClick={() => props.onItemTapped(4)}
      >
        <FiSettings size={ICON_SIZE} />
      </NavBarLeftSideContentItemStyled>
    </NavBarLeftSideContentWrapperStyled>
  );
};

export default NavBarSideContent;
