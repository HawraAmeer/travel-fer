import { Link, useHistory } from "react-router-dom";
import BookButton from "../buttons/BookButton";

const FlightItem = ({ flight, airlineId }) => {
  const history = useHistory();

  return (
    <>
      <li className="list-group-item">
        <p>Airline: {flight.airline.name}</p>
        <p>
          Departure: {flight.departure.name} | {flight.depDate} |{" "}
          {flight.depTime}
        </p>
        <p>
          Arrival Airport: {flight.arrival.name} | {flight.arrDate} |{" "}
          {flight.arrTime}
        </p>
        <p>
          Business Seats: {flight.business} | economy Seats: {flight.economy} |
          Price: {flight.price}
        </p>

        {!airlineId && history.location.pathname !== "/booking" && (
          <BookButton flight={flight} />
        )}

        {airlineId && (
          <Link
            className="navbar-brand"
            to={{
              pathname: `/flights/${flight.id}/edit`,
              state: { airlineId: flight.airlineId },
            }}
          >
            <button className="btn btn-primary float-right">Edit</button>
          </Link>
        )}
      </li>
    </>
  );
};

export default FlightItem;
