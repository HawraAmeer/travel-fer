import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

// Components
import Type from "./Type";
import Airport from "./Airport";
import Date from "./Date";
import Passengers from "./Passengers";
import SeatsType from "./SeatsType";

// Actions
import { searchFlight } from "../../store/actions/flightActions";

const Search = () => {
  const dispatch = useDispatch();
  const [flight, setFlight] = useState({
    depAirport: "",
    arrAirport: "",
    depDate: moment().format("YYYY-MM-DD"),
    returnDate: moment().add(1, "days").format("YYYY-MM-DD"),
    passengers: 1,
    seat: "economy", // or business
    type: "roundtrip", // or oneway
  });

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(flight);
    // dispatch(searchFlight(flight));
  };
  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <Type flight={flight} setFlight={setFlight} />
        <br />
        <Airport flight={flight} setFlight={setFlight} type="depAirport" />
        <br />
        <Airport flight={flight} setFlight={setFlight} type="arrAirport" />
        <br />
        <Date flight={flight} setFlight={setFlight} type="depDate" />
        <br />
        {flight.type === "roundtrip" && (
          <Date flight={flight} setFlight={setFlight} type="returnDate" />
        )}
        <br />
        <Passengers flight={flight} setFlight={setFlight} />
        <br />
        <SeatsType flight={flight} setFlight={setFlight} />
        <br />
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={flight.depAirport === "" || flight.arrAirport === ""}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
