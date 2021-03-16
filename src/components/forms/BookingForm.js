import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import FlightItem from "../FlightList/FlightItem";
import PassengerForm from "./PassengerForm";

function BookingForm() {
  const flightReducer = useSelector((state) => state.flightReducer);

  const [passengers, setPassengers] = useState([]);
  console.log(
    "🚀 ~ file: BookingForm.js ~ line 11 ~ BookingForm ~ passengers",
    passengers
  );
  const passengersForm = new Array(flightReducer.searchFlight.passengers)
    .fill()
    .map((item, index) => (
      <div className="col" key={index + 1}>
        <PassengerForm
          key={index}
          passengers={passengers}
          setPassengers={setPassengers}
          number={index + 1}
        />
      </div>
    ));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <FlightItem flight={flightReducer.goFlight} />
          </div>
          <div className="col-auto">
            <FlightItem flight={flightReducer.returnFlight} />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">{passengersForm}</div>
        {passengers.length === passengersForm.length && (
          <div className="row">
            <button className="btn btn-primary float-right">Next</button>
          </div>
        )}
      </div>
    </>
  );
}

export default BookingForm;
