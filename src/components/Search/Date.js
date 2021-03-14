import moment from "moment";

const Date = ({ flight, setFlight, type }) => {
  const today = moment().format("YYYY-MM-DD");

  return (
    <>
      <label>{type === "depDate" ? "Departing Date" : "Returning Date"}</label>
      <input
        className="form-control"
        type="date"
        min={type === "depDate" ? today : flight.depDate}
        value={flight[type]}
        onChange={(event) =>
          setFlight({ ...flight, [type]: event.target.value })
        }
      />
    </>
  );
};

export default Date;
