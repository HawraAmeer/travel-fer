import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";

const Routes = () => {
  return (
    <Switch>
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
