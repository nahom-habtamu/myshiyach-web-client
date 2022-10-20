import styled from "styled-components";

const NavBarTopContentButton = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  transform: all 1s linear;

  :hover {
    cursor: pointer;
    border-color: darkgrey;
  }
`;

const NavBarToContentButtonSeparator = styled.div`
  width: 1.7px;
  background: grey;
  margin-left: 13px;
  margin-right: 13px;
`;

const NavBarToContentButtonImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 2px;
`;

export {
  NavBarTopContentButton,
  NavBarToContentButtonImage,
  NavBarToContentButtonSeparator,
};
