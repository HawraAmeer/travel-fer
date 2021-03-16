import { useState } from "react";

function PassengerForm({ passengers, setPassengers, number }) {
  const [done, setDone] = useState(false);

  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    ageGroup: "",
  });

  const handleChange = (event) => {
    setPassenger({ ...passenger, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassengers([...passengers, passenger]);
    setDone(!done);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label className="form-label">
        <h2>Passenger {number}</h2>
      </label>

      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          value={passenger.firstName}
          onChange={handleChange}
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          value={passenger.lastName}
          onChange={handleChange}
          name="lastName"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age Group</label>
        <select
          name="ageGroup"
          onChange={handleChange}
          className="form-control"
        >
          <option value="Infant">Infant</option>
          <option value="Child">Child</option>
          <option value="Adult">Adult</option>
        </select>
      </div>

      {!done && (
        <button type="submit" className="btn btn-info float-right">
          Add
        </button>
      )}
    </form>
  );
}

export default PassengerForm;
