const SeatsType = ({ flight, setFlight }) => {
  return (
    <>
      <label className="form-label">Seat Type:</label>
      <br />
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="seat"
          value="economy"
          defaultChecked
          onChange={(event) =>
            setFlight({ ...flight, seat: event.currentTarget.value })
          }
        />
        <label className="form-check-label">Economy</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="seat"
          value="business"
          onChange={(event) =>
            setFlight({ ...flight, seat: event.currentTarget.value })
          }
        />
        <label className="form-check-label">Business</label>
      </div>
    </>
  );
};

export default SeatsType;
