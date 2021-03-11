import { Route, Switch } from "react-router";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

import BookingForm from "../forms/BookingForm";
import FlightForm from "../forms/FlightsForm";

import Profile from "../Profile";
import Airline from "../Airline";

const Routes = () => {
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
