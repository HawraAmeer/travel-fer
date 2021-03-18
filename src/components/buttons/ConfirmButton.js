import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../store/actions/flightActions";
import Modal from "react-modal";
import { useHistory } from "react-router";

const ConfirmButton = ({ user, seat }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const flightReducer = useSelector((state) => state.flightReducer);
  const passengers = useSelector((state) => state.passengerReducer.passengers);

  const goFlight = flightReducer.goFlight;
  const returnFlight = flightReducer.returnFlight;

  const [booking, setBooking] = useState({
    user: user === "guest" ? "guest" : { userId: user.id, email: user.email },
    passengers: passengers,
    goFlight: { flightId: goFlight.id, seat, price: goFlight[seat] },
    returnFlight: {
      flightId: returnFlight.id,
      seat,
      price: returnFlight[seat],
    },
  });
  console.log(
    "🚀 ~ file: ConfirmButton.js ~ line 28 ~ ConfirmButton ~ booking",
    booking
  );

  Modal.setAppElement("#root");

  const [isOpen, setIsOpen] = useState(false);

  const handleBooking = () => {
    dispatch(bookFlight(booking));
    setIsOpen(!isOpen);
    history.push("/");
  };

  return (
    <>
      <button className="btn btn-primary float-right" onClick={handleBooking}>
        Confirm
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(!isOpen)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Alert</h2>
        <div>
          <h4>Thank you for Booking with us!</h4>
        </div>
        <div className="container">
          <button
            className="btn btn-primary float-right"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            OK
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmButton;
