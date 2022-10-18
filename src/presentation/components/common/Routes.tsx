import { Switch, Route, HashRouter } from "react-router-dom";
import DummyPage, { DummyPageRoute } from "../../pages/DummyPage";
import LoginPage, { LoginPageRoute } from "../../pages/LoginPage";
import OtpVerificationPage, {
  OtpVerificationPageRoute,
} from "../../pages/OtpVerificationPage";
import SignUpPage, { SignUpPageRoute } from "../../pages/SignUpPage";

type UserLoginStatus = {
  isLoggedIn: boolean;
};

const Routes = ({ isLoggedIn }: UserLoginStatus) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={LoginPageRoute}>
          <LoginPage />
        </Route>
        <Route exact path={SignUpPageRoute}>
          <SignUpPage />
        </Route>
        <Route exact path={OtpVerificationPageRoute}>
          <OtpVerificationPage />
        </Route>
        <Route exact path={DummyPageRoute}>
          <DummyPage />
        </Route>
        {isLoggedIn && (
          <Route path="/home">
            <h1>Home Page</h1>
          </Route>
        )}
      </Switch>
    </HashRouter>
  );
};

export default Routes;
