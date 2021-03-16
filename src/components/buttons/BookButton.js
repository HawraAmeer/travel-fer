import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { searchFlight, setFlight } from "../../store/actions/flightActions";

const BookButton = ({ flight }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const flightReducer = useSelector((state) => state.flightReducer);

  const bookFlight = () => {
    dispatch(setFlight(flight));
    if (flightReducer.searchFlight.type === "oneway") {
      history.push("/booking");
    } else {
      const returnFlight = {
        depAirport: flight.arrival.id,
        arrAirport: flight.departure.id,
        depDate: flightReducer.searchFlight.returnDate,
        passengers: flightReducer.searchFlight.passengers,
        seat: flightReducer.searchFlight.seat,
        type: "oneway",
      };
      if (
        flightReducer.searchFlight.depDate ===
        flightReducer.searchFlight.returnDate
      )
        returnFlight.arrTime = flight.arrTime;

      dispatch(searchFlight(returnFlight));
      history.push("/");
    }
    console.log(flight);
  };
  return (
    <button className="btn btn-primary float-right" onClick={bookFlight}>
      Book
    </button>
  );
};

export default BookButton;
