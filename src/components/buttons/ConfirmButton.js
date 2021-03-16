import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../store/actions/flightActions";

const ConfirmButton = ({ user }) => {
  const dispatch = useDispatch();
  const flightReducer = useSelector((state) => state.flightReducer);
  const passengers = useSelector((state) => state.passengerReducer.passengers);

  const goFlight = flightReducer.goFlight;
  const returnFlight = flightReducer.returnFlight;

  const [booking, setBooking] = useState({
    user: user === "guest" ? "guest" : { userId: user.id, email: user.email },
    passengers: passengers,
    goFlight: { flightId: goFlight.id, seat: "economy" },
    returnFlight: { flightId: returnFlight.id, seat: "economy" },
  });

  const handleBooking = () => {
    console.log("Booking", booking);
    dispatch(bookFlight(booking));
  };

  return (
    <button className="btn btn-primary float-right" onClick={handleBooking}>
      Confirm
    </button>
  );
};

export default ConfirmButton;
