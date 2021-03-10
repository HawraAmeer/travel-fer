import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

//Actions
import { addFlight, updateFlight } from "../../store/actions/flightsActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { flightId } = useParams();
  const foundFlight = useSelector((state) =>
    state.flightsReducer.flights.find((flight) => flight.id === flightId)
  );

  const [flight, setFlight] = useState(
    foundFlight ?? {
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      economySeats: 0,
      businessSeats: 0,
      dep_loc: "",
      arrival_loc: "",
      price: "",
    }
  );

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundFlight) dispatch(updateFlight(flight));
    else dispatch(addFlight(flight));
    history.push("/flights");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundFlight ? "Update" : "Create"} Flight</h1>
      <div className="mb-3">
        <label className="form-label">Departure Date</label>
        <input
          type="date"
          value={flight.departureDate}
          onChange={handleChange}
          name=" departureDate"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        {/* REVIEW: You're using camel case for the user :D */}
        <label className="form-label">departureTime</label>
        <input
          type="text"
          value={flight.departureTime}
          onChange={handleChange}
          name="departureTime"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">arrivalDate</label>
        <input
          type="date"
          value={flight.arrivalDate}
          onChange={handleChange}
          name="arrivalDate"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">arrivalTime</label>
        <input
          type="text"
          value={flight.arrivalTime}
          onChange={handleChange}
          name="arrivalTime"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">economySeats</label>
        <input
          type="number"
          value={flight.economySeats}
          onChange={handleChange}
          name="economySeats"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">businessSeats</label>
        <input
          type="number"
          value={flight.businessSeats}
          onChange={handleChange}
          name="businessSeats"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">dep_loc</label>
        <input
          type="text"
          value={flight.dep_loc}
          onChange={handleChange}
          name="dep_loc"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">arrival_loc</label>
        <input
          type="text"
          value={flight.arrival_loc}
          onChange={handleChange}
          name="arrival_loc"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">price</label>
        <input
          type="number"
          value={flight.price}
          onChange={handleChange}
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
