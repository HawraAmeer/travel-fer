import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";
import Search from "../Search";
import FlightList from "../FlightList";

const GoFlights = () => {
  const flightReducer = useSelector((state) => state.flightReducer);

  if (flightReducer.loading) return <Loading />;

  return (
    <div>
      <Search />
      <br />
      <div>
        <FlightList flights={flightReducer.flights} />
      </div>
    </div>
  );
};

export default GoFlights;
