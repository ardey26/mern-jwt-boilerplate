import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <button onClick={handleLogout}> Logout </button>
      </section>
    </>
  );
}

export default Dashboard;
