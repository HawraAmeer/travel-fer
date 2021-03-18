import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";

// Actions
import { airlineFlights } from "../../store/actions/flightActions";

// Components
import Loading from "../Loading";
import AirlineFlightItem from "./AirlineFlightItem";

const AirlineFlights = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const airline = useLocation().state.airline;

  const flightReducer = useSelector((state) => state.flightReducer);

  useEffect(() => {
    dispatch(airlineFlights(airline.id));
  }, [dispatch, airline.id]);

  if (!user || user.airlineId === 0) return <Redirect to="/" />;
  if (flightReducer.loading || !airline) return <Loading />;

  return (
    <div className="container">
      <div className="row">
        <Link
          to={{
            pathname: `/${airline.slug}/flights/new`,
            state: { airlineId: airline.id },
          }}
        >
          <button className="btn btn-primary">Create New Flight</button>
        </Link>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {flightReducer.flights.map((flight) => (
              <AirlineFlightItem key={flight.id} flight={flight} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AirlineFlights;
