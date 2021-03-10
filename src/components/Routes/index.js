import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";
import Profile from "../Profile";
import Airline from "../Airline";
import FlightForm from "../forms/FlightsForm";

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);

  return (
    <Switch>
      <Route path="/flights/new">
        <FlightForm />
      </Route>
      <Route path="/flights">
        <Airline />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      {/* add a 404 page */}
    </Switch>
  );
};

export default Routes;
