import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";
import Profile from "../Profile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
    </Switch>
  );
};

export default Routes;
