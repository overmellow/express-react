import { Link, Outlet } from "react-router-dom";
import { removeData } from "../../services/LocalStorage";
import { useAuth } from "../../contexts/AuthContext";
// import AuthStatus from "./AuthStatus";

export default function Layout({ children }) {
  const { authToken, setAuthToken, removeAuthToken } = useAuth();

  function logOut() {
    // setAuthToken(null);
    removeAuthToken();
  }

  return <div>
    {/* <AuthStatus setToken={setToken} /> */}
    <ul>
      { !authToken 
        ?         
      <li>
        <Link to="/login">Login</Link>
      </li> :<></>
      }
      { !authToken 
        ?   
      <li>
        <Link to="/signup">Sign Up</Link>
      </li> :<></>
      }
      { authToken 
        ?
        <li>
          <Link to="/">Home</Link>
        </li>
        : <></>
      }
      { authToken 
        ?      
        <li>
          <Link to="/books">Books</Link>
        </li>
        : <></>
      }
      { authToken 
        ?      
        <li>
          <Link to="/users">Users</Link>
        </li>
        : <></>
      }      
      { authToken 
        ?
        <li>
          <a href="#" onClick={logOut}>Log out</a>
        </li> 
        : <></>
      }
    </ul>
    <Outlet />
  </div>
}