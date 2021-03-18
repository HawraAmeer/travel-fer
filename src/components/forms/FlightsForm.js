import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

// Components
import Airport from "../Search/Airport";
import Date from "../Search/Date";
import Duration from "./Duration";
import Price from "./Price";
import Seat from "./Seat";
import Time from "./Time";

// Actions
import { createFlight, updateFlight } from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const airlineId = useLocation().state.airlineId;
  const { flightId } = useParams();

  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === +flightId)
  );

  if (foundFlight) {
    foundFlight.depTime = moment(foundFlight.depTime, "H:mm").format("HH:mm");
    foundFlight.arrTime = moment(foundFlight.arrTime, "H:mm").format("HH:mm");
    foundFlight.depAirport = foundFlight.departure.id;
    foundFlight.arrAirport = foundFlight.arrival.id;
  }

  const [flight, setFlight] = useState(
    foundFlight || {
      airlineId,
      depAirport: "",
      depDate: "",
      depTime: "",
      arrAirport: "",
      duration: "",
      economy: "",
      ePrice: "",
      business: "",
      bPrice: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundFlight) {
      flight.id = foundFlight.id;
      dispatch(updateFlight(flight));
    } else dispatch(createFlight(flight));
    history.goBack();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundFlight ? "Update" : "Create"} Flight</h1>
      <div className="row">
        <div className="col">
          <Airport flight={flight} setFlight={setFlight} type="depAirport" />
        </div>
        <div className="col">
          <Airport flight={flight} setFlight={setFlight} type="arrAirport" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Date
            flight={flight}
            setFlight={setFlight}
            type="depDate"
            airline={true}
          />
        </div>
        <div className="col">
          <Time flight={flight} setFlight={setFlight} type="depTime" />
        </div>
        {foundFlight && (
          <>
            <div className="col">
              <Date
                flight={flight}
                setFlight={setFlight}
                type="arrDate"
                airline={true}
              />
            </div>
            <div className="col">
              <Time flight={flight} setFlight={setFlight} type="arrTime" />
            </div>
          </>
        )}
        {!foundFlight && (
          <div className="col">
            <Duration flight={flight} setFlight={setFlight} />
          </div>
        )}
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Seat flight={flight} setFlight={setFlight} type="economy" />
        </div>
        <div className="col">
          <Price flight={flight} setFlight={setFlight} type="economy" />
        </div>
        <div className="col">
          <Seat flight={flight} setFlight={setFlight} type="business" />
        </div>
        <div className="col">
          <Price flight={flight} setFlight={setFlight} type="business" />
        </div>
      </div>
      <br />
      <button
        type="submit"
        className="btn btn-primary float-right"
        disabled={
          flight.depAirport === 0 ||
          flight.arrAirport === 0 ||
          flight.depAirport === flight.arrAirport
        }
      >
        {foundFlight ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FlightForm;
