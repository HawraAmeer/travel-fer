import { useState } from "react";
import { useHistory } from "react-router";

function PassengerForm() {
  const history = useHistory();

  //remove dead code if not neede
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    // cpr: "",
    ageGroup: ["Infant", "Child", "Adult"],
    // gender: ["male", "female"],
    // phone: "",
  });

  const handleChange = (event) => {
    setPassenger({ ...passenger, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/passenger");
  };

  //remove dead code if not neede
  return (
    <form className="container" onSubmit={handleSubmit}>
      <label className="form-label">
        <h2>Passenger1</h2>
      </label>
      {/* <h1>{foundPassenger ? "Update" : "Create"} Passenger</h1> */}
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          value={passenger.firstName}
          onChange={handleChange}
          name=" firstName"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          value={passenger.lastName}
          onChange={handleChange}
          name=" lastName"
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">CPR</label>
        <input
          type="text"
          value={passenger.cpr}
          onChange={handleChange}
          name=" cpr"
          className="form-control"
        />
      </div> */}
      <div className="mb-3">
        <label className="form-label">Age Group</label>
        <select
          name="ageGroup"
          onChange={handleChange}
          className="form-control"
        >
          {passenger.ageGroup.map((p) => (
            <option selected={passenger.ageGroup === p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Gender</label>
        <select name="gender" onChange={handleChange} className="form-control">
          {passenger.gender.map((p) => (
            <option selected={passenger.gender === p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          value={passenger.phone}
          onChange={handleChange}
          name=" phone"
          className="form-control"
        />
      </div> */}

      <button type="submit" className="btn btn-info float-right">
        {/* {foundPassenger ? "Update" : "Create"} */}
        Book
      </button>
    </form>
  );
}

export default PassengerForm;
