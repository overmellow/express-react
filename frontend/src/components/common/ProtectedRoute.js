import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({children}) => {
    const { authToken } = useAuth();
    if (!authToken) {
        return <Navigate to="/login"
    //     // replace={true} 
        />;
    }

    return children;
  };

export default ProtectedRoute;  