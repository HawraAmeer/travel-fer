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
        <h3>Booking History</h3>
        <div class="card text-center">
          <ProfileItem />
          <ProfileItem />
        </div>
      </div>
    </>
  );
};

export default Profile;
