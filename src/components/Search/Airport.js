import { useSelector } from "react-redux";

const Airport = ({ flight, setFlight, type }) => {
  const locations = useSelector((state) => state.locationReducer.locations);

  const findId = (name) => {
    const location = locations.find((location) => location.name === name);
    return location ? location.id : 0;
  };

  const findName = (id) => {
    const location = locations.find((location) => location.id === id);
    return location ? location.name : "";
  };

  return (
    <div>
      <label className="form-label">
        {type === "depAirport" ? "Departure Airport" : "Arrival Airport"}
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        placeholder="Type to search..."
        value={findName(flight[type])}
        onChange={(event) => {
          setFlight({ ...flight, [type]: findId(event.target.value) });
        }}
      />
      <datalist id="datalistOptions">
        {locations.map((location) => (
          <option key={location.id} value={location.name} />
        ))}
      </datalist>
    </div>
  );
};

export default Airport;
