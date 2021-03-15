import { useSelector } from "react-redux";

// Components
import Search from "../Search";
import FlightList from "../FlightList";

const Home = () => {
  const flightReducer = useSelector((state) => state.flightReducer);

  return (
    <>
      <Search />
      <br />
      {flightReducer.flights.length === 0 && <p>NO FLIGHTS</p>}
      {!flightReducer.loading && flightReducer.flights.length !== 0 && (
        <FlightList flights={flightReducer.flights} />
      )}
    </>
  );
};

export default Home;
