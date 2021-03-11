//********THIS FILE NEED TO BE CLEANED :(
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

//Actions
import { addFlight, updateFlight } from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const airlineId = useLocation().state.airlineId;
  const { flightId } = useParams();

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
      arrDate: "",
      arrTime: "",
      economy: "",
      business: "",
      price: "",
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
    } else dispatch(addFlight(flight));
    history.push("/flights");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundFlight ? "Update" : "Create"} Flight</h1>
      <div className="mb-3">
        <div className="mb-3">
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
        <label className="form-label">Departure Date</label>
        <input
          type="date"
          value={flight.depDate}
          onChange={handleChange}
          name="depDate"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Departure Time</label>
        <input
          type="time"
          value={flight.depTime}
          onChange={handleChange}
          name="depTime"
          className="form-control"
        />
      </div>
      <div className="mb-3">
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
      <div className="mb-3">
        <label className="form-label">Arrival Date</label>
        <input
          type="date"
          value={flight.arrDate}
          onChange={handleChange}
          name="arrDate"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Arrival Time</label>
        <input
          type="time"
          value={flight.arrTime}
          onChange={handleChange}
          name="arrTime"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Economy Seats</label>
        <input
          type="number"
          value={flight.economy}
          onChange={numChange}
          name="economy"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Buisness Seats</label>
        <input
          type="number"
          value={flight.business}
          onChange={numChange}
          name="business"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={flight.price}
          onChange={numChange}
          name="price"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {foundFlight ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FlightForm;
