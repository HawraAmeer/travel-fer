import { Redirect, Route, Switch } from "react-router";
// import { useSelector } from "react-redux";

// Components
import NotFound from "../NotFound";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";

import BookingForm from "../forms/BookingForm";
import FlightForm from "../forms/FlightsForm";
import AirlineHome from "../AirlineHome";
import PassengerForm from "../forms/PassengerForm";
import Booking from "../Booking";
import AirlineFlights from "../AirlineFlights";

const Routes = () => {
  // const user = useSelector((state) => state.authReducer.user);

  return (
    <Switch>
      <Route exact path="/booking">
        <BookingForm />
      </Route>

      <Route exact path="/passengers">
        <PassengerForm />
      </Route>

      <Route exact path="/booking-review">
        <Booking />
      </Route>

      <Route exact path="/return-flight">
        <Home />
      </Route>
      {/* Okey here and down */}
      <Route path="/404">
        <NotFound />
      </Route>

      <Route
        exact
        path={[
          "/:airlineSlug/flights/new",
          "/:airlineSlug/flights/:flightId/edit",
        ]}
      >
        <FlightForm />
      </Route>

      <Route exact path="/:airlineSlug/flights">
        <AirlineFlights />
      </Route>

      <Route exact path="/airline">
        <AirlineHome />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/signin">
        <Signin />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
