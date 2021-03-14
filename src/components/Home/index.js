import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import Search from "../Search";
import FlightList from "../FlightList";

const Home = () => {
  const flightReducer = useSelector((state) => state.flightReducer);
  const [isSearching, setIsSearching] = useState(true);

  return (
    <>
      <Search setIsSearching={setIsSearching} />
      <br />
      {!isSearching && flightReducer.flights.length === 0 && (
        <p>NO FLIGHTS MEETS YOUR CHOICES</p>
      )}
      {!isSearching && <FlightList flights={flightReducer.flights} />}
    </>
  );
};

export default Home;
