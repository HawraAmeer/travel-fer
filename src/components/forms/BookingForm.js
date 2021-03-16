import { useState } from "react";
import { useHistory } from "react-router";

function BookingForm() {
  const history = useHistory();

  //use Data from backend not predefine
  const [booking, setbooking] = useState({
    depAirport: "WWWAirport",
    depDate: "2021-03-15",
    depTime: "15:00",
    arrAirport: "DDDAirport",
    arrDate: "2021-03-15",
    arrTime: "17:00",
    economy: 20,
    business: 10,
    price: 280,
  });

  const handleChange = (event) => {
    setbooking({ ...booking, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/passenger");
  };

  //remove dead code if not needed
  return (
    <form className="container" onSubmit={handleSubmit}>
      <fieldset disabled="disabled">
        <label className="form-label">
          <h2>Booking Form</h2>
        </label>
        {/* <h1>{foundPassenger ? "Update" : "Create"} Passenger</h1> */}
        <div className="mb-3">
          <label className="form-label">Departure Airport</label>
          <input
            type="text"
            value={booking.depAirport}
            onChange={handleChange}
            name="depAirport"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Departure Date</label>
          <input
            type="text"
            value={booking.depDate}
            onChange={handleChange}
            name="depDate"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Departure Time</label>
          <input
            type="text"
            value={booking.depTime}
            onChange={handleChange}
            name="depTime"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Arrival Airport</label>
          <input
            type="text"
            value={booking.arrAirport}
            onChange={handleChange}
            name="arrAirport"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Arrival Date</label>
          <input
            type="text"
            value={booking.arrDate}
            onChange={handleChange}
            name="arrDate"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Arrival Time</label>
          <input
            type="text"
            value={booking.arrTime}
            onChange={handleChange}
            name="arrTime"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Economy </label>
          <input
            type="text"
            value={booking.economy}
            onChange={handleChange}
            name="economy"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Business</label>
          <input
            type="text"
            value={booking.business}
            onChange={handleChange}
            name="business"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            value={booking.price}
            onChange={handleChange}
            name="price"
            className="form-control"
          />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-info float-right">
        {/* {foundPassenger ? "Update" : "Create"} */}
        Next
      </button>
    </form>
  );
}

export default BookingForm;
