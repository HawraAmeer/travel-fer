import FlightItem from "./FlightItem";

const FlightList = ({ flights }) => {
  console.log(flights);
  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));
  // .filter((flight) => flight.id)
  // .map((flight) => <FlightItem flight={flight} key={flight.id} />);
  // REVIEW: remove commented out code
  return (
    <div className="container">
      <ul>
        <li className="row">{flightList}</li>
      </ul>
    </div>
  );
};

export default FlightList;
