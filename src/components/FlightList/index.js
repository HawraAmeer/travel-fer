import { Link } from "react-router-dom";
import FlightItem from "./FlightItem";

const FlightList = ({ flights, airlineId }) => {
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));
  return (
    <div className="container">
      <Link to={`/flights/new`}>
        <button className="btn btn-primary">Add New</button>
      </Link>
      <ul className="list-group">{flightList}</ul>
    </div>
  );
};

export default FlightList;
