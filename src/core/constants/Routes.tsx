import { 
  BrowserRouter as Router, Switch, Route 
} from "react-router-dom";
import LoginPage from "../../presentation/pages/LoginPage";

type UserLoginStatus = {
  isLoggedIn : boolean 
};

const Routes = ({ isLoggedIn }: UserLoginStatus) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        {
          isLoggedIn && <Route path="/home">
            <h1>Home Page</h1>
          </Route>
        }
      </Switch>
    </Router>
  );
}

export default Routes;