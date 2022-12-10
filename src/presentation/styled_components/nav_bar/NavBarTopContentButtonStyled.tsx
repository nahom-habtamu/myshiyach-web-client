import styled from "styled-components";

const NavBarTopContentButtonStyled = styled.div`
  color: black;
  font-size: 90%;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  transform: all 1s linear;

  :hover {
    cursor: pointer;
    border-color: darkgrey;
  }

  @media (max-width: 500px) {
    font-size: 80%;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    font-size: 90%;
    font-weight: 400;
  }
`;

const NavBarToContentButtonSeparatorStyled = styled.div`
  width: 1.7px;
  background: grey;
  margin-left: 13px;
  margin-right: 13px;
`;

export { NavBarTopContentButtonStyled, NavBarToContentButtonSeparatorStyled };
