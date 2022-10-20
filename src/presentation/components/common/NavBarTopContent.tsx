import {
  NavBarToContentButtonSeparator,
  NavBarTopContentButton,
} from "../../styled_components/nav_bar/NavBarTopContentButtonStyled";
import {
  NavBarTopContentBlockItemWrapper,
  NavBarTopContentsWrapper,
} from "../../styled_components/nav_bar/NavBarTopContentsWrapperStyled";

const NavBarTopContent = () => {
  return (
    <NavBarTopContentsWrapper>
      <NavBarTopContentBlockItemWrapper position="start">
        <NavBarTopContentButton>Download</NavBarTopContentButton>
        <NavBarToContentButtonSeparator />
        <NavBarTopContentButton>Follow us on</NavBarTopContentButton>
      </NavBarTopContentBlockItemWrapper>
      <NavBarTopContentBlockItemWrapper position="end">
        <NavBarTopContentButton>Sign Up</NavBarTopContentButton>
        <NavBarToContentButtonSeparator />
        <NavBarTopContentButton>Login</NavBarTopContentButton>
      </NavBarTopContentBlockItemWrapper>
    </NavBarTopContentsWrapper>
  );
};

export default NavBarTopContent;
