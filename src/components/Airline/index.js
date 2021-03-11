import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// Components
import FlightList from "../FlightList";

const Airline = () => {
  const user = useSelector((state) => state.authReducer.user);
  const allairlines = useSelector((state) => state.airlineReducer.airlines);
  const allflights = useSelector((state) => state.flightReducer.flights);

  const airline = allairlines.find((airline) => airline.userId === user.id);

  if (!user || !user.isAirline) {
    return <Redirect to="/" />;
  }
  const flights = airline.flights.map((flight) =>
    allflights.find((_flight) => _flight.id === flight.id)
  );
  console.log("🚀 ~ file: index.js ~ line 25 ~ Airline ~ flights", flights);

  return (
    <>{airline && <FlightList flights={flights} airlineId={airline.id} />}</>
  );
};

export default Airline;
