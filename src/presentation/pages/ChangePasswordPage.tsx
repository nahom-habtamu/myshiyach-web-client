import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { changePassword } from "../../core/action_creators/user/change_password_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ActionButton from "../components/common/ActionButton";
import AuthInput from "../components/common/AuthInput";
import useScrollToTop from "../custom_hooks/useScrollToTop";
import {
  AuthInputWrapperStyled,
  SpaceStyled,
} from "../styled_components/AuthInputStyled";
import {
  LoginPageHeaderOneStyled,
  LoginPageHeaderTwoStyled,
} from "../styled_components/LoginPageHeaderStyled";
import { LoginPageRoute } from "./LoginPage";

type ChangePasswordPageArguments = {
  phoneNumber: string;
};

const ChangePasswordPage = () => {
  const [_] = useScrollToTop();
  const history = useHistory();
  const location = useLocation();

  const args = location.state as ChangePasswordPageArguments;

  const changePasswordState = useAppSelector((state) => state.changePassword);

  const dispatch = useAppDispatch();

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleChangePassword = () => {
    if (password && passwordRepeat) {
      dispatch(changePassword(args.phoneNumber, password));
    }
  };

  useEffect(() => {
    if (changePasswordState.result != null) {
      history.push(LoginPageRoute);
    }
  }, [changePasswordState.result]);

  const renderButtonBasedOnState = () => {
    if (changePasswordState.isLoading) {
      return <h1>Loading........</h1>;
    } else {
      return <ActionButton text="Continue" onPressed={handleChangePassword} />;
    }
  };

  const passwordValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Password";
    else if (value.length < 6)
      return "Enter Password Greator than 6 characters";
    return null;
  }

  const passwordRepeatValidator = (value: string) => {
    if (value.length === 0)
      return "Enter Password";
    else if (value.length < 6)
      return "Enter Password Greator than 6 characters";
    else if (value !== password)
      return "Passwords Don't Match";
    return null;
  }

  return (
    <>
      <LoginPageHeaderOneStyled>Change Your Password</LoginPageHeaderOneStyled>
      <LoginPageHeaderTwoStyled>
        Please Fill out you new password
      </LoginPageHeaderTwoStyled>
      <AuthInputWrapperStyled>
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          obsecureText={true}
          placeHolder="Password"
          validator={passwordValidator}
        />
        <SpaceStyled />
        <AuthInput
          type="password"
          onChanged={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordRepeat(e.target.value)
          }
          obsecureText={true}
          placeHolder="Confirm Password"
          validator={passwordRepeatValidator}
        />
        <SpaceStyled />
        {
          <>
            <h6 color="red">{changePasswordState.error}</h6>
            <SpaceStyled />
          </>
        }
        {renderButtonBasedOnState()}
      </AuthInputWrapperStyled>
    </>
  );
};

export default ChangePasswordPage;
export const ChangePasswordPageRoute = "/changePassword";
