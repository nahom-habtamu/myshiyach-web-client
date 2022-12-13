import {
  NavBarToContentButtonSeparatorStyled,
  NavBarTopContentButtonStyled,
} from "../../styled_components/nav_bar/NavBarTopContentButtonStyled";
import {
  NavBarTopContentBlockItemWrapperStyled,
  NavBarTopContentsWrapperStyled,
} from "../../styled_components/nav_bar/NavBarTopContentsWrapperStyled";

const NavBarTopContent = () => {
  return (
    <NavBarTopContentsWrapperStyled>
      <NavBarTopContentBlockItemWrapperStyled position="start">
        <NavBarTopContentButtonStyled>Download</NavBarTopContentButtonStyled>
        <NavBarToContentButtonSeparatorStyled />
        <NavBarTopContentButtonStyled>
          Follow Us
        </NavBarTopContentButtonStyled>
      </NavBarTopContentBlockItemWrapperStyled>
      <NavBarTopContentBlockItemWrapperStyled position="end">
        <NavBarTopContentButtonStyled>Sign Up</NavBarTopContentButtonStyled>
        <NavBarToContentButtonSeparatorStyled />
        <NavBarTopContentButtonStyled>Login</NavBarTopContentButtonStyled>
      </NavBarTopContentBlockItemWrapperStyled>
    </NavBarTopContentsWrapperStyled>
  );
};

export default NavBarTopContent;
