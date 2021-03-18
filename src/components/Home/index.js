import { useSelector } from "react-redux";
import { Redirect } from "react-router";

// Components
import Search from "../Search";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);

  if (user && user.airlineId !== 0) return <Redirect to="/airline" />;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Search For Your Next Travel!</h1>
      <Search />
    </>
  );
};

export default Home;
