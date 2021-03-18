// Components
import BookButton from "../buttons/BookButton";

const FlightItem = ({ flight, seat, summury }) => {
  return (
    <>
      <li className="list-group-item">
        <p>
          Airline: {flight.airline.name} | Price:{" "}
          {seat === "economy" ? flight.ePrice : flight.bPrice}
        </p>
        <p>
          Departure: {flight.departure.name} | {flight.depDate} |{" "}
          {flight.depTime}
        </p>
        <p>
          Arrival Airport: {flight.arrival.name} | {flight.arrDate} |{" "}
          {flight.arrTime}
        </p>

        {!summury && (
          <div>
            <BookButton flight={flight} />
          </div>
        )}
      </li>
    </>
  );
};

export default FlightItem;
