import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const NavBarLeftSideContentWrapperStyled = styled.div<{ collapsed : boolean}>`
  width: 150px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-top: 25px;
  transition: all 1s ease;

  @media (max-width: 800px) {
    width: 100px;
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.collapsed ? '0' : '0.9'}
  }
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
  position: relative;
  :hover {
    background-color: ${PINK_COLOR};
  }
`;

const NavBarLeftSideContentItemUnseenStyled = styled.div`
  font-size: 15px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-block: 10px;
  position: absolute;
  top: 10px;
  right: 15px;
  background: red;
  color: white;
  text-align: center;
  line-height: 25px;
`;

export {
  NavBarLeftSideContentWrapperStyled,
  NavBarLeftSideContentItemStyled,
  NavBarLeftSideContentItemUnseenStyled,
};
