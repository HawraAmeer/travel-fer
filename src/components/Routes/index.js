import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";
import FlightList from "../FlightList/FlightList";
import FlightForm from "../forms/FlightsForm";
import Profile from "../Profile";

const Routes = () => {
  const flights = useSelector((state) => state.flightsReducer.flights);

  return (
    <Switch>
      <Route path={"/airlines/:airlineId/flights"}>
        <FlightForm />
      </Route>
      <Route path="/flights">
        <FlightList flights={flights} />
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
    </Switch>
  );
};

export default Routes;
