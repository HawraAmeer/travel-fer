import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";

const FlightList = ({ flights, airlineId }) => {
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} airlineId={airlineId} />
  ));

  const flightLoading = useSelector((state) => state.flightReducer.loading);

  if (flightLoading) return <Loading />;

  return (
    <div className="container">
      {airlineId && (
        <Link
          to={{
            pathname: `/flights/new`,
            state: { airlineId },
          }}
        >
          <button className="btn btn-primary">Add New</button>
        </Link>
      )}
      <ul className="list-group">{flightList}</ul>
    </div>
  );
};

export default FlightList;
