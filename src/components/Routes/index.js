import { Route, Switch } from "react-router";
import Signin from "../Authentication/SignIn";
import Signup from "../Authentication/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      {/* <Route path="/">
        <Home />
      </Route> */}
    </Switch>
  );
};

export default Routes;
