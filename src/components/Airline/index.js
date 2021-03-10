import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchAirlineFlights } from "../../store/actions/airlineActions";
import FlightList from "../FlightList/FlightList";
const Airline = () => {
  const user = useSelector((state) => state.authReducer.user);
  const allairlines = useSelector((state) => state.airlineReducer.airlines);
  const allflights = useSelector((state) => state.flightReducer.flights);
  const airline = allairlines.find((airline) => airline.userId === user.id);
  //Fliter flight list to get only airline flights
  if (!user || !user.isAirline) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {/* should be change to fligh lits only */}
      <FlightList flights={allflights} airlineId={airline.id} />
    </>
  );
};

export default Airline;
