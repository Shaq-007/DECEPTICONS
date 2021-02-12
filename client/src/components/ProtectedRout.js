import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from '../components/AuthContext';

function ProtectedRoute({ component: Component, ...rest }) {
  const {user} = useContext(AuthContext);
  console.log('this is the user in protected route', user )
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          console.log("hey Kate, welcome");
          return <Component />;
        } else {
          console.log("you have to log in");
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;