import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

//actions
import { fetchFlights } from "../../store/actions/flightActions";

const FlightItem = ({ flight }) => {
  // const dispatch = useDispatch();
  // dispatch(fetchFlights(flight));
  return (
    <>
      <li className="list-group-item">
        {flight.dep_loc}
        <br></br>
        {flight.departureDate}
        <br></br>
        {flight.departureTime}
        <br></br>
        {flight.arrival_loc}
        <br></br>
        {flight.businessSeats}
        <br></br>
        {flight.economySeats}
        <br></br>
        {flight.price}
      </li>
    </>
  );
};

export default FlightItem;
