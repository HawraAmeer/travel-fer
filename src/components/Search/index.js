import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";

// Components
import Airport from "./Airport";
import Date from "./Date";
import Passengers from "./Passengers";
import SeatsType from "./SeatsType";
import Type from "./Type";

// Actions
import { searchFlight } from "../../store/actions/flightActions";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const flightReducer = useSelector((state) => state.flightReducer);

  const [search, setSearch] = useState(null);

  useEffect(() => {
    checkSearch();
  });

  const [flight, setFlight] = useState(
    search ?? {
      depAirport: "",
      arrAirport: "",
      depDate: moment().format("YYYY-MM-DD"),
      returnDate: moment().add(1, "days").format("YYYY-MM-DD"),
      passengers: 1,
      seat: "economy",
      type: "roundtrip",
    }
  );

  const checkSearch = () => {
    if (history.location.pathname === "/flights") {
      setSearch(flightReducer.goSearch);
    } else if (history.location.pathname === "/return-flights") {
      setSearch(flightReducer.returnSearch);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (history.location.pathname === "/flights") {
      dispatch(searchFlight(flight, "go"));
    } else if (history.location.pathname === "/return-flights") {
      dispatch(searchFlight(flight, "return"));
    } else {
      dispatch(searchFlight(flight, "go"));
      history.push("/flights");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="row g-3">
          <div className="col-auto">
            <Airport flight={flight} setFlight={setFlight} type="depAirport" />
          </div>
          <div className="col-auto">
            <Airport flight={flight} setFlight={setFlight} type="arrAirport" />
          </div>
          <div className="col-auto">
            <Date flight={flight} setFlight={setFlight} type="depDate" />
          </div>
          {flight.type === "roundtrip" && (
            <div className="col-auto">
              <Date flight={flight} setFlight={setFlight} type="returnDate" />
            </div>
          )}
          <div className="col-auto">
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
