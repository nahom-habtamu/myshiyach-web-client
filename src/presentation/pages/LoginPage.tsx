import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { login } from "../../core/action_creators/auth/login_action_creators";
import LoginPageContent from "../components/login_page/LoginPageContent";

const LoginPage = () => {
  const [userName, setUserName] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login);

  const handleUserNameInputChanged = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePasswordInputChanged = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmission = () => {
    if (userName && password) {
      const loginRequest = { userName: userName!, password: password! };
      dispatch(login(loginRequest));
    }
  };

  return (
    <LoginPageContent
      loginState={loginState}
      onPasswordChanged={handlePasswordInputChanged}
      onUsernameChanged={handleUserNameInputChanged}
      onFormSubmitted={handleLoginSubmission}
    />
  );
};

export default LoginPage;
export const LoginPageRoute = "/login";
