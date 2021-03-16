import { useSelector } from "react-redux";
import ConfirmButton from "../buttons/ConfirmButton";
import FlightItem from "../FlightList/FlightItem";
import Modal from "react-modal";
import { useState } from "react";
import { useHistory } from "react-router";

const Booking = () => {
  const history = useHistory();
  const flightReducer = useSelector((state) => state.flightReducer);
  const passengers = useSelector((state) => state.passengerReducer.passengers);
  const [user, setUser] = useState(
    useSelector((state) => state.authReducer.user)
  );

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

  Modal.setAppElement("#root");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <p>Go Flight</p>
      <FlightItem flight={flightReducer.goFlight} />
      <br />
      <p>Back Flight</p>
      <FlightItem flight={flightReducer.returnFlight} />
      <br />
      {passengers.map((passenger, index) => (
        <div key={Math.random()}>
          <p>Passenger {index + 1}</p>
          <p>
            {passenger.firstName}, {passenger.lastName}
          </p>
          <p>Age Group: {passenger.ageGroup}</p>
        </div>
      ))}
      {user && (
        <div>
          <ConfirmButton user={user} />
        </div>
      )}
      <div>
        {!user && (
          <button
            className="btn btn-primary float-right"
            onClick={() => setIsOpen(!isOpen)}
          >
            Next
          </button>
        )}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(!isOpen)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Alert</h2>
          <div>
            <h4>Do you want to continue as a guest or sign in first?</h4>
          </div>
          <div className="container">
            <button
              className="btn btn-primary float-right"
              onClick={() => history.push("/signin")}
            >
              Sign in
            </button>
            <button
              className="btn btn-primary float-right"
              onClick={() => {
                setIsOpen(!isOpen);
                setUser("guest");
              }}
            >
              Continue
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Booking;
