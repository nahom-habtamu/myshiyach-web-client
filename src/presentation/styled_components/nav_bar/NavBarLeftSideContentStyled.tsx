import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const NavBarLeftSideContentWrapperStyled = styled.div`
  width: 150px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-top: 25px;
`;

interface NavBarLeftSideContentItemStyledProps {
  isActive: boolean;
}

const NavBarLeftSideContentItemStyled = styled.div<NavBarLeftSideContentItemStyledProps>`
  width: 80px;
  height: 80px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? PINK_COLOR : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "grey")};
  transition: background-color 0.6s;
  
  :hover {
    background-color: ${PINK_COLOR};
  }
`;

export { NavBarLeftSideContentWrapperStyled, NavBarLeftSideContentItemStyled };
