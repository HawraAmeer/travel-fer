import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/SignIn";
import Signup from "../authentication/SignUp";

import BookingForm from "../forms/BookingForm";
import FlightForm from "../forms/FlightsForm";

import FlightList from "../FlightList/FlightList";
import Profile from "../Profile";
import Airline from "../Airline";


const Routes = () => {

  const flights = useSelector((state) => state.flightsReducer.flights);

  return (
    <Switch>
      {/* will replaced with flightSlug, coming soon...*/}
      <Route path={["/flights/new", "/flights/:flightId?/edit"]}>
        <FlightForm />
      </Route>
      <Route path="/flights">
        <Airline />
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
      {/* add a 404 page */}
    </Switch>
  );
};

export default Routes;
