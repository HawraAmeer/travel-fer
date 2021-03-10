import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Icon
import { FiLogOut } from "react-icons/fi";

// Store Action
import { signout } from "../../store/actions/authActions";

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  return (
    <nav className="navbar navbar-expand">
      <Link className="navbar-brand" to="/">
        {/* REVIEW: NO INLINE STYLING */}
        <img
          style={{ width: "5rem" }}
          src="https://www.clipartkey.com/mpngs/m/154-1545165_transparent-background-travel-icon-png.png"
          alt="logo"
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {user ? (
            <>
              <Link to="/profile">
                <p style={{ padding: "1em", fontSize: "1em" }}>
                  Welcome, {user.username}
                </p>
              </Link>
              <Link to="/">
                <FiLogOut
                  style={{ margin: "1em" }}
                  onClick={() => dispatch(signout())}
                  size="1.75em"
                  color="black"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button
                  style={{
                    fontSize: "1em",
                    padding: "1em",
                    marginLeft: "0.5em",
                    borderRadius: "3px",
                    color: "black",
                  }}
                >
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button
                  style={{
                    fontSize: "1em",
                    padding: "1em",
                    marginLeft: "0.5em",
                    borderRadius: "3px",
                    color: "black",
                  }}
                >
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
