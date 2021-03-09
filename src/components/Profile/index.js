import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

// Icons
import { FiEdit } from "react-icons/fi";

// Actions
import { updateUser } from "../../store/actions/authActions";

const Profile = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(
    useSelector((state) => state.authReducer.user)
  );

  const [edit, setEdit] = useState(false);

  if (!user) return <Redirect to="/" />;

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(!edit);
    dispatch(updateUser(user));
  };

  return (
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
  );
};

export default Profile;
