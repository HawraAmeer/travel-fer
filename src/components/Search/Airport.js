import { useSelector } from "react-redux";

const Airport = ({ flight, setFlight, type }) => {
  const locations = useSelector((state) => state.locationReducer.locations);

  const findId = (name) => {
    return locations.find((location) => location.name === name).id;
  };

  return (
    <div>
      <label className="form-label">
        {type === "depAirport" ? "Departure Airport" : "Arrival Airport"}
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
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
