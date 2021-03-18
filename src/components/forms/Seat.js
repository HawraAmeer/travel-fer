const Seat = ({ flight, setFlight, type }) => {
  return (
    <>
      <label className="form-label">
        {type === "economy" ? "Economy" : "Business"} Seats
      </label>
      <input
        className="form-control"
        type="number"
        value={flight[type]}
        onChange={(event) =>
          setFlight({ ...flight, [type]: +event.target.value })
        }
      />
    </>
  );
};

export default Seat;
