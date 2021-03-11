import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";
import FlightList from "../FlightList/FlightList";
import BookingForm from "../forms/BookingForm";
import FlightForm from "../forms/FlightsForm";
import Profile from "../Profile";

const Routes = () => {
  const flights = useSelector((state) => state.flightsReducer.flights);
  //const passengers = useSelector((state) => state.passengersReducer.passengers);
  return (
    <Switch>
      <Route path={"/airlines/:airlineId/flights"}>
        <FlightForm />
      </Route>
      <Route path="/flights">
        <FlightList flights={flights} />
      </Route>
      <Route path="/passengers">
        {/* <FlightList passengers={passengers} /> */}
        <BookingForm />
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
