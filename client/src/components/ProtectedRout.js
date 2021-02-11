import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ user: user, component: Component, ...rest }) {
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