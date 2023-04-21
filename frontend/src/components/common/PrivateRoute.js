
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
  
    return (
      <Route
        {...rest}
        render={props =>
          authTokens ? (
            <Component {...props} />
          ) : (
            <Navigate
              to={{ pathname: "/login", state: { referer: props.location } }}
            />
            // <Redirect
            //   to={{ pathname: "/login", state: { referer: props.location } }}
            // />
          )
        }
      />
    );
  }

export default PrivateRoute;  