const Time = ({ flight, setFlight, type }) => {
  return (
    <>
      <label className="form-label">
        {type === "depTime" ? "Departure" : "Arrival"} Time
      </label>
      <input
        className="form-control"
        type="time"
        value={flight[type]}
        onChange={(event) =>
          setFlight({ ...flight, [type]: event.target.value })
        }
      />
    </>
  );
};

export default Time;
