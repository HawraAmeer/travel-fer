const Filter = ({ filter, setFilter, min, max, airlines, resultsLength }) => {
  const checkedAirlines = (airlineName) => {
    const foundAirline = filter.airline.find((name) => name === airlineName);
    if (foundAirline) {
      setFilter({
        ...filter,
        airline: filter.airline.filter((name) => name !== airlineName),
      });
    } else {
      setFilter({
        ...filter,
        airline: [...filter.airline, airlineName],
      });
    }
  };

  const airlinesList = airlines.map((airlineName) => (
    <div key={airlineName} className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={() => checkedAirlines(airlineName)}
      />
      <label className="form-check-label">{airlineName}</label>
    </div>
  ));

  return (
    <>
      {min !== max && (
        <div>
          <label className="form-label">
            Cost {filter.price !== 0 && `(up to ${filter.price})`}
          </label>
          <br />
          <label>{min}</label>
          <input
            className="form-range"
            type="range"
            step={1}
            min={min}
            max={max}
            value={filter.price}
            onChange={(event) =>
              setFilter({ ...filter, price: event.target.value })
            }
          />
          <label>{max}</label>
        </div>
      )}
      <br />
      {airlines.length > 1 && (
        <>
          <label>Airlines</label>
          {airlinesList}
        </>
      )}
      <br />
      {resultsLength > 1 && (
        <div>
          <label className="form-label d-flex justify-content-start">
            Departure Time
          </label>
          <input
            type="range"
            className="form-range"
            min={4}
            max={24}
            step={4}
            value={filter.time ? filter.time : 4}
            onChange={(event) =>
              setFilter({ ...filter, time: event.target.value })
            }
          />
          <label className="form-label">
            {filter.time
              ? `${filter.time - 4}:00 - ${filter.time}:00`
              : "00:00 - 23:59"}
          </label>
        </div>
      )}
    </>
  );
};

export default Filter;
