import { useSelector } from "react-redux";
import { Redirect } from "react-router";

// Components
import Search from "../Search";
import FlightList from "../FlightList";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  const flightReducer = useSelector((state) => state.flightReducer);

  if (user && user.airlineId !== 0) return <Redirect to="/airline" />;

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
