import { Link } from "react-router-dom";

// Components
import FlightItem from "./FlightItem";

const FlightList = ({ flights, airlineId }) => {
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));

  return (
    <div className="container">
      <Link
        to={{
          pathname: `/flights/new`,
          state: { airlineId },
        }}
      >
        <button className="btn btn-primary">Add New</button>
      </Link>
      <ul className="list-group">{flightList}</ul>
    </div>
  );
};

export default FlightList;
