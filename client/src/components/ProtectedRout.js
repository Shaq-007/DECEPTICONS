import React from "react";
import { Route, Redirect } from "react-router-dom";
// import ParentDashboard from "../pages/ParentDashboard";
// import AdminPage from "../pages/AdminPage";

function ProtectedRoute({ loggedIn: loggedIn, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
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
