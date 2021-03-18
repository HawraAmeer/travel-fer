import { Link, useParams } from "react-router-dom";

const AirlineFlightItem = ({ flight }) => {
  const { airlineSlug } = useParams();

  return (
    <li className="list-group-item">
      <p>
        Departure: {flight.departure.name} | {flight.depDate} | {flight.depTime}
      </p>
      <p>
        Arrival Airport: {flight.arrival.name} | {flight.arrDate} |{" "}
        {flight.arrTime}
      </p>
      <p>
        Business Seats: {flight.business} | Economy Seats: {flight.economy}
      </p>
      <p>
        Business Price: {flight.bPrice} | Economy Price: {flight.ePrice}
      </p>

      <Link
        className="navbar-brand"
        to={{
          pathname: `/${airlineSlug}/flights/${flight.id}/edit`,
          state: { airlineId: flight.airlineId },
        }}
      >
        <button className="btn btn-primary float-right">Edit</button>
      </Link>
    </li>
  );
};

export default AirlineFlightItem;
