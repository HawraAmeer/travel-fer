import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const search = useSelector((state) => state.flightReducer.searchFlight);
  console.log("🚀 ~ file: index.js ~ line 19 ~ Search ~ search", search);

  useEffect(() => {
    checkSearch();
  });

  const [flight, setFlight] = useState(
    search ?? {
      depAirport: 0,
      arrAirport: 0,
      depDate: moment().format("YYYY-MM-DD"),
      returnDate: moment().add(1, "days").format("YYYY-MM-DD"),
      passengers: 1,
      seat: "economy", // or business
      type: "roundtrip", // or oneway
    }
  );
  console.log("🚀 ~ file: index.js ~ line 22 ~ Search ~ flight", flight);

  const checkSearch = () => {
    if (search) setFlight(search);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchFlight(flight));
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="row g-3">
          <div className="col">
            <Airport flight={flight} setFlight={setFlight} type="depAirport" />
          </div>
          <div className="col">
            <Airport flight={flight} setFlight={setFlight} type="arrAirport" />
          </div>
          <div className="col">
            <Date flight={flight} setFlight={setFlight} type="depDate" />
          </div>
          <div className="col">
            {flight.type === "roundtrip" && (
              <Date flight={flight} setFlight={setFlight} type="returnDate" />
            )}
          </div>
          <div className="col">
            <Passengers flight={flight} setFlight={setFlight} />
          </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col-auto">
            <Type flight={flight} setFlight={setFlight} />
          </div>
          <div className="col-auto">
            <SeatsType flight={flight} setFlight={setFlight} />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={flight.depAirport === 0 || flight.arrAirport === 0}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
