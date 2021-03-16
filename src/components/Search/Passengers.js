const Passengers = ({ flight, setFlight }) => {
  return (
    <>
      <label>Passengers</label>
      <input
        className="form-control"
        type="number"
        min={1}
        value={flight.passengers}
        onChange={(event) =>
          setFlight({ ...flight, passengers: +event.target.value })
        }
      />
    </>
  );
};

export default Passengers;
