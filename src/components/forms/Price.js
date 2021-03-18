const Price = ({ flight, setFlight, type }) => {
  return (
    <>
      <label className="form-label">
        {type === "economy" ? "Economy" : "Business"} Price
      </label>
      <input
        className="form-control"
        type="number"
        value={type === "economy" ? flight.ePrice : flight.bPrice}
        onChange={(event) =>
          setFlight({
            ...flight,
            [type === "economy" ? "ePrice" : "bPrice"]: +event.target.value,
          })
        }
      />
    </>
  );
};

export default Price;
