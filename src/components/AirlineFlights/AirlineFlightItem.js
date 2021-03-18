import { Link, useParams } from "react-router-dom";

const AirlineFlightItem = ({ flight }) => {
  const { airlineSlug } = useParams();

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <p>
            Departure: {flight.departure.name} | {flight.depDate} |{" "}
            {flight.depTime}
          </p>
        </div>
        <div className="col">
          <p>
            Arrival Airport: {flight.arrival.name} | {flight.arrDate} |{" "}
            {flight.arrTime}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Business Seats: {flight.business} | Economy Seats: {flight.economy}
          </p>
        </div>
        <div className="col">
          <p>
            Business Price: {flight.bPrice} | Economy Price: {flight.ePrice}
          </p>
        </div>
      </div>

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
