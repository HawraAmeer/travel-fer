import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

//actions
import { fetchFlights } from "../../store/actions/flightsActions";

const FlightItem = ({ flights }) => {
  const dispatch = useDispatch();
  dispatch(fetchFlights(flights));
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/flights/${flights.id}`}>
        <p className="flights-dep">{flights.dep_loc}</p>
        <p className="flights-arr">{flights.arrival_loc}</p>
        <p className="flights-depDate">{flights.departureDate}</p>
        <p className="flights-depTime">{flights.departureTime}</p>
        <p className="flights-ecoSeats">{flights.economySeats}</p>
        <p className="flights-busSeats">{flights.businessSeats}</p>
        <p className="flights-price">{flights.price}</p>
      </Link>
    </div>
  );
};

export default FlightItem;
