import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

// Components
import Loading from "../Loading";

// Actions
import { fetchAirline } from "../../store/actions/airlineActions";

const AirlineHome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(fetchAirline(user.airlineId));
  }, [user]);

  const airlineLoading = useSelector((state) => state.airlineReducer.loading);
  const airline = useSelector((state) => state.airlineReducer.airline);

  if (!user || user.airlineId === 0) return <Redirect to="/" />;

  if (airlineLoading) return <Loading />;

  return (
    <>
      {airline && (
        <>
          <h2>{airline.name}</h2>
          <img src={airline.logo} alt={airline.name} style={{ width: 1000 }} />
          <br />
          <Link
            to={{
              pathname: `/${airline.slug}/flights`,
              state: { airline: airline },
            }}
          >
            <button className="btn btn-primary">Flights List</button>
          </Link>
        </>
      )}
    </>
  );
};

export default AirlineHome;
