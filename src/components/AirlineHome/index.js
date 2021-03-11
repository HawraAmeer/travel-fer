import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

// Actions
import { fetchAirline } from "../../store/actions/airlineActions";
import { airlineFlights } from "../../store/actions/flightActions";

import Loading from "../Loading";
import FlightList from "../FlightList";

const AirlineHome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(fetchAirline(user.airlineId));
    dispatch(airlineFlights(user.airlineId));
  }, []);

  const airlineLoading = useSelector((state) => state.airlineReducer.loading);
  const flightsLoading = useSelector((state) => state.flightReducer.loading);
  const airline = useSelector((state) => state.airlineReducer.airline);
  const flights = useSelector((state) => state.flightReducer.flights);

  if (!user || !user.isAirline) return <Redirect to="/" />;

  if (airlineLoading && flightsLoading) return <Loading />;

  return (
    <>
      {airline && (
        <>
          <h2>{airline.name}</h2>
          {/* <img src={airline.image} alt={airline.name} /> */}
        </>
      )}
      {flights && <FlightList flights={flights} airlineId={airline.id} />}
    </>
  );
};

export default AirlineHome;
