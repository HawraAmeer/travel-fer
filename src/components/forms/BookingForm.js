import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// Components
import FlightItem from "../FlightList/FlightItem";
import PassengerForm from "./PassengerForm";

import { setPassengersList } from "../../store/actions/passengerActions";

function BookingForm() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleNext = () => {
    dispatch(setPassengersList(passengers));
    history.push("/booking-review");
  };

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
            <button
              className="btn btn-primary float-right"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default BookingForm;
