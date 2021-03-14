import { Link } from "react-router-dom";

const FlightItem = ({ flight }) => {
  return (
    <>
      <li className="list-group-item">
        <p>
          Departure Airport: {flight.depAirport} || Departure Date:{" "}
          {flight.depDate} || Departure Time: {flight.depTime}
        </p>
        <p>
          Arrival Airport: {flight.arrAirport} || Arrival Date: {flight.arrDate}{" "}
          || Arrival Time: {flight.arrTime}
        </p>
        <p>
          Business Seats: {flight.business} || economy Seats: {flight.economy}
        </p>
        <p>Price: {flight.price}</p>

        <Link
          className="navbar-brand"
          to={{
            pathname: `/flights/${flight.id}/edit`,
            state: { airlineId: flight.airlineId },
          }}
        >
          <button className="btn btn-primary float-right">Edit</button>
        </Link>
      </li>
    </>
  );
};

export default FlightItem;
