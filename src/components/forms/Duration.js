const Duration = ({ flight, setFlight }) => {
  return (
    <>
      <label className="form-label">Flight Duration (minutes)</label>
      <input
        className="form-control"
        type="number"
        value={flight.duration}
        onChange={(event) =>
          setFlight({ ...flight, duration: +event.target.value })
        }
      />
    </>
  );
};

export default Duration;
