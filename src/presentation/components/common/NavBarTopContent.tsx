import { useHistory } from "react-router-dom";
import { loginClear } from "../../../core/action_creators/auth/login_action_creators";
import { logOut } from "../../../core/action_creators/common/log_out_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { LoginPageRoute } from "../../pages/LoginPage";
import { SignUpPageRoute } from "../../pages/SignUpPage";
import {
  NavBarToContentButtonSeparatorStyled,
  NavBarTopContentButtonStyled,
} from "../../styled_components/nav_bar/NavBarTopContentButtonStyled";
import {
  NavBarTopContentBlockItemWrapperStyled,
  NavBarTopContentsWrapperStyled,
} from "../../styled_components/nav_bar/NavBarTopContentsWrapperStyled";

const NavBarTopContent = () => {

  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(loginClear());
    logOut();
    history.push(LoginPageRoute);
  }

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
        {
          loginState.result.token.length === 0 ? <>
            <NavBarTopContentButtonStyled
              onClick={() => history.push(SignUpPageRoute)}>
              Sign Up
            </NavBarTopContentButtonStyled>
            <NavBarToContentButtonSeparatorStyled />
            <NavBarTopContentButtonStyled
              onClick={() => history.push(LoginPageRoute)}>
              Login
            </NavBarTopContentButtonStyled>
          </> :
            <NavBarTopContentButtonStyled 
              onClick={handleLogOut}>
                Log Out
            </NavBarTopContentButtonStyled>
        }
      </NavBarTopContentBlockItemWrapperStyled>
    </NavBarTopContentsWrapperStyled>
  );
};

export default NavBarTopContent;
