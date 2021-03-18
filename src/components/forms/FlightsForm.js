//********THIS FILE NEED TO BE CLEANED :(
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

// Actions
import {
  airlineFlights,
  createFlight,
  updateFlight,
} from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const airlineId = useLocation().state.airlineId;
  const { airlineSlug, flightId } = useParams();

  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === +flightId)
  );

  const locations = useSelector((state) => state.locationReducer.locations);
  const locationList = locations.map((location) => (
    <option value={`${location.id}`}>{location.name}</option>
  ));

  const [flight, setFlight] = useState(
    foundFlight || {
      airlineId,
      depAirport: "",
      depDate: "",
      depTime: "",
      arrAirport: "",
      duration: "",
      economy: "",
      business: "",
      ePrice: "",
      bPrice: "",
    }
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  const numChange = (event) => {
    setFlight({ ...flight, [event.target.name]: +event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (foundFlight) {
      flight.id = foundFlight.id;
      dispatch(updateFlight(flight));
    } else dispatch(createFlight(flight));

    history.push(`/${airlineSlug}/flights`);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundFlight ? "Update" : "Create"} Flight</h1>
      <div className="row">
        <div className="col">
          <label className="form-label">Departure Airport</label>
          <select
            className="custom-select"
            value={flight.depAirport}
            onChange={numChange}
            name="depAirport"
          >
            <option value="">Select Departure Airport</option>
            {locationList}
          </select>
        </div>
        <div className="col">
          <label className="form-label">Arrival Airport</label>
          <select
            className="custom-select"
            value={flight.arrAirport}
            onChange={numChange}
            name="arrAirport"
          >
            <option value="">Select Arrival Airport</option>

            {locationList}
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label className="form-label">Departure Date</label>
          <input
            type="date"
            value={flight.depDate}
            onChange={handleChange}
            name="depDate"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Departure Time</label>
          <input
            type="time"
            value={flight.depTime}
            onChange={handleChange}
            name="depTime"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Flight Duration in Minutes</label>
          <input
            type="number"
            value={flight.duration}
            onChange={numChange}
            name="duration"
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label className="form-label">Economy Seats</label>
          <input
            type="number"
            value={flight.economy}
            onChange={numChange}
            name="economy"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Economy Price</label>
          <input
            type="number"
            value={flight.ePrice}
            onChange={numChange}
            name="ePrice"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Buisness Seats</label>
          <input
            type="number"
            value={flight.business}
            onChange={numChange}
            name="business"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Business Price</label>
          <input
            type="number"
            value={flight.bPrice}
            onChange={numChange}
            name="bPrice"
            className="form-control"
          />
        </div>
      </div>
      <br />
      <button type="submit" className="btn btn-primary float-right">
        {foundFlight ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FlightForm;
