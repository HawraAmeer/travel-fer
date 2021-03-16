import { Redirect, Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";

import NotFound from "../NotFound";

import BookingForm from "../forms/BookingForm";
import FlightForm from "../forms/FlightsForm";

import AirlineHome from "../AirlineHome";
import Home from "../Home";
import PassengerForm from "../forms/PassengerForm";
import ProfileItem from "../Profile/ProfileItem";

const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <Switch>
      <Route exact path="/booking">
        <BookingForm />
      </Route>

      <Route exact path="/passenger">
        <PassengerForm />
      </Route>

      <Route exact path={["/flights/new", "/flights/:flightId?/edit"]}>
        <FlightForm />
      </Route>

      <Route exact path="/flights">
        <AirlineHome />
      </Route>

      <Route path="/404">
        <NotFound />
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
