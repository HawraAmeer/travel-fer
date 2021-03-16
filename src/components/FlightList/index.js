import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Loading from "../Loading";
import Filter from "../Filter";
import FlightItem from "./FlightItem";

const FlightList = ({ flights, airlineId }) => {
  const airlines = [...new Set(flights.map((flight) => flight.airline.name))];

  const maxRange = () => {
    let max = 0;
    flights.forEach((flight) => {
      if (flight.price > max) max = flight.price;
    });
    return max;
  };

  const minRange = () => {
    let min = maxRange();
    flights.forEach((flight) => {
      if (flight.price < min) min = flight.price;
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
          item.price <= filter.price &&
          filter.airline.includes(item.airline.name) &&
          +item.depTime.split(":")[0] >= +(filter.time - 4) &&
          +item.depTime.split(":")[0] < +filter.time
      );
    } else if (filter.airline.length !== 0) {
      return list.filter(
        (item) =>
          item.price <= filter.price &&
          filter.airline.includes(item.airline.name)
      );
    } else if (filter.time !== null) {
      return list.filter(
        (item) =>
          item.price <= filter.price &&
          +item.depTime.split(":")[0] >= +(filter.time - 4) &&
          +item.depTime.split(":")[0] < +filter.time
      );
    } else {
      return list.filter((item) => item.price <= filter.price);
    }
  };

  const flightList = filtering(flights).map((flight) => (
    <FlightItem flight={flight} key={flight.id} airlineId={airlineId} />
  ));

  const flightLoading = useSelector((state) => state.flightReducer.loading);

  if (flightLoading) return <Loading />;

  return (
    <div className="container">
      <div className="row">
        {airlineId && (
          <Link
            to={{
              pathname: `/flights/new`,
              state: { airlineId },
            }}
          >
            <button className="btn btn-primary">Add New</button>
          </Link>
        )}
      </div>

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
          <ul className="list-group">{flightList}</ul>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
