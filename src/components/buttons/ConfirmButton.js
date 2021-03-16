import { useState } from "react";
import { useSelector } from "react-redux";

const ConfirmButton = ({ user }) => {
  const flightReducer = useSelector((state) => state.flightReducer);

  const [booking, setBooking] = useState({
    goFlight: flightReducer.goFlight,
    returnFlight: flightReducer.returnFlight,
    user: user ?? null,
  });

  const handleBooking = () => {
    console.log("Booking", booking);
  };

  return (
    <button className="btn btn-primary float-right" onClick={handleBooking}>
      Confirm
    </button>
  );
};

export default ConfirmButton;
