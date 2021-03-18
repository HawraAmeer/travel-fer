import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { searchFlight, setFlight } from "../../store/actions/flightActions";

const BookButton = ({ flight }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const flightReducer = useSelector((state) => state.flightReducer);
  console.log(
    "🚀 ~ file: BookButton.js ~ line 10 ~ BookButton ~ flightReducer",
    flightReducer
  );

  const bookFlight = () => {
    dispatch(setFlight(flight));
    if (flightReducer.goSearch && !flightReducer.returnSearch) {
      if (flightReducer.goSearch.type === "oneway")
        history.push("/booking", { seat: flightReducer.goSearch.seat });
      else {
        const returnFlight = {
          depAirport: flight.arrival.id,
          arrAirport: flight.departure.id,
          depDate: flightReducer.goSearch.returnDate,
          passengers: flightReducer.goSearch.passengers,
          seat: flightReducer.goSearch.seat,
          type: "oneway",
        };
        if (
          flightReducer.goSearch.depDate === flightReducer.goSearch.returnDate
        )
          returnFlight.arrTime = flight.arrTime;

        dispatch(searchFlight(returnFlight));
        history.push("/return-flights");
      }
    } else if (flightReducer.returnSearch) {
      if (flightReducer.returnSearch.type === "oneway")
        history.push("/booking", { seat: flightReducer.returnSearch.seat });
      else {
        const returnFlight = {
          depAirport: flight.arrival.id,
          arrAirport: flight.departure.id,
          depDate: flightReducer.returnSearch.returnDate,
          passengers: flightReducer.returnSearch.passengers,
          seat: flightReducer.returnSearch.seat,
          type: "oneway",
        };
        if (
          flightReducer.returnSearch.depDate ===
          flightReducer.returnSearch.returnDate
        )
          returnFlight.arrTime = flight.arrTime;

        dispatch(searchFlight(returnFlight));
        history.push("/return-flights");
      }
    }
  };

  return (
    <button className="btn btn-primary float-right" onClick={bookFlight}>
      Book
    </button>
  );
};

export default BookButton;
