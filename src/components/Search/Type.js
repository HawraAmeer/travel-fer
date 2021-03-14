const Type = ({ flight, setFlight }) => {
  return (
    <>
      <label className="form-label">Trip Type:</label>
      <br />
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="inlineRadio1"
          value="roundtrip"
          defaultChecked
          onChange={(event) =>
            setFlight({ ...flight, type: event.currentTarget.value })
          }
        />
        <label className="form-check-label">Roundtrip</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="inlineRadio2"
          value="oneway"
          onChange={(event) =>
            setFlight({ ...flight, type: event.currentTarget.value })
          }
        />
        <label className="form-check-label">Oneway</label>
      </div>
    </>
  );
};

export default Type;
