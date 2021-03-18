import moment from "moment";

const Date = ({ flight, setFlight, type, airline }) => {
  const today = moment();

  return (
    <>
      <label>{type === "depDate" ? "Departing Date" : "Returning Date"}</label>
      <input
        className="form-control"
        type="date"
        min={
          airline
            ? today.add(1, "days").format("YYYY-MM-DD")
            : type === "depDate"
            ? today.format("YYYY-MM-DD")
            : flight.depDate
        }
        value={flight[type]}
        onChange={(event) =>
          setFlight({ ...flight, [type]: event.target.value })
        }
      />
    </>
  );
};

export default Date;
