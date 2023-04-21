import { useNavigate } from "react-router-dom";
import { removeData } from "../../services/LocalStorage";

export default function AuthStatus({ setToken }) {
  let navigate = useNavigate();

  // if (!auth.user) {
  //   return <p>You are not logged in.</p>;
  // }

  return (
    <p>
      {/* Welcome {auth.user}!{" "} */}
      <button onClick={() => {
        setToken(null);
        removeData('token')
        navigate("/")
      }
        // auth.signout(() => navigate("/"));
        // console.log('log out')
      }>
        Sign out
      </button>
    </p>
  );
}