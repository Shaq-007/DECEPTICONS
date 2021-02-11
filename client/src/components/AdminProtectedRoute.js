import React from "react";
import { Route, Redirect } from "react-router-dom";

function AdminProtectedRoute({
  userlevel: userlevel,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userlevel === 10) {
          console.log("hey admin, welcome");
          return <Component />;
        } else {
          console.log("you are not an admin");
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
}
/// this is to fix Git Hub
export default AdminProtectedRoute;
