import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

// Icons
import { FiEdit } from "react-icons/fi";

// Actions
import { fetchHistory, updateUser } from "../../store/actions/authActions";

//Components
import ProfileItem from "./ProfileItem";
import Loading from "../Loading";

const Profile = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.authReducer);
  const [user, setUser] = useState(userReducer.user);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  if (userReducer.loading) return <Loading />;
  console.log(userReducer.history);
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(!edit);
    dispatch(updateUser(user));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h4>{user.username}</h4>
        {edit ? (
          <form className="container" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                value={user.email}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button className="btn float-right" type="submit">
              Done
            </button>
          </form>
        ) : (
          <h6>
            {user.email}
            <FiEdit
              style={{ margin: "1em" }}
              size="1.75em"
              color="black"
              onClick={() => setEdit(!edit)}
            />
          </h6>
        )}
      </div>
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <h3>Booking History</h3>
            <tr>
              <td>
                <tr>Departure</tr>
                <tr>
                  <td>Airport</td>
                  <td>Date</td>
                  <td>Time</td>
                </tr>
              </td>
              <td>
                <tr>Arrival</tr>
                <tr>
                  <td>Airport</td>
                  <td>Date</td>
                  <td>Time</td>
                </tr>
              </td>

              <td>Seat Type</td>
              <td># of Passengers</td>
            </tr>
          </thead>
          <tbody>
            <ProfileItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
