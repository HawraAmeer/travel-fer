import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";
import Filter from "../Filter";
import FlightItem from "./FlightItem";
import { useHistory } from "react-router";

const FlightList = ({ flights }) => {
  const history = useHistory();

  const airlines = [...new Set(flights.map((flight) => flight.airline.name))];
  const flightReducer = useSelector((state) => state.flightReducer);

  const [seat, setSeat] = useState("economy");

  useEffect(() => {
    if (flightReducer.goSearch)
      setSeat(
        history.location.pathname === "/flights"
          ? flightReducer.goSearch.seat
          : seat
      );
  }, [flightReducer, history.location.pathname]);

  const maxRange = () => {
    const price = seat === "economy" ? "ePrice" : "bPrice";
    let max = 0;
    flights.forEach((flight) => {
      if (flight[price] > max) max = flight[price];
    });
    return max;
  };

  const minRange = () => {
    const price = seat === "economy" ? "ePrice" : "bPrice";
    let min = maxRange();
    flights.forEach((flight) => {
      if (flight[price] < min) min = flight[price];
    });
    return min;
  };

  const [filter, setFilter] = useState({
    price: maxRange(),
    airline: [],
    time: null,
  });

  const filtering = (list) => {
    if (filter.airline.length !== 0 && filter.time !== null) {
      return list.filter(
        (item) =>
          item[seat === "economy" ? "ePrice" : "bPrice"] <= filter.price &&
          filter.airline.includes(item.airline.name) &&
          +item.depTime.split(":")[0] >= +(filter.time - 4) &&
          +item.depTime.split(":")[0] < +filter.time
      );
    } else if (filter.airline.length !== 0) {
      return list.filter(
        (item) =>
          item[seat === "economy" ? "ePrice" : "bPrice"] <= filter.price &&
          filter.airline.includes(item.airline.name)
      );
    } else if (filter.time !== null) {
      return list.filter(
        (item) =>
          item[seat === "economy" ? "ePrice" : "bPrice"] <= filter.price &&
          +item.depTime.split(":")[0] >= +(filter.time - 4) &&
          +item.depTime.split(":")[0] < +filter.time
      );
    } else {
      return list.filter(
        (item) => item[seat === "economy" ? "ePrice" : "bPrice"] <= filter.price
      );
    }
  };

  const flightList = filtering(flights);
  const filteredList = flightList.map((flight) => (
    <FlightItem flight={flight} key={flight.id} seat={seat} />
  ));

  const flightLoading = useSelector((state) => state.flightReducer.loading);

  if (flightLoading) return <Loading />;

  return (
    <>
      {flights.length === 0 ? (
        <p>NO FLIGHTS</p>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <Filter
                filter={filter}
                setFilter={setFilter}
                min={minRange()}
                max={maxRange()}
                airlines={airlines}
                resultsLength={flightList.length}
              />
            </div>

            <div className="col">
              <ul className="list-group">{filteredList}</ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightList;
