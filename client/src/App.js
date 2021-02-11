import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Categories from "./pages/CategoriesPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Upload from "./components/Upload";
import AdminPage from "./pages/AdminPage";
import AdminManageUsers from "./pages/AdminManageUsers";
import AdminManageCategories from "./pages/AdminManageCategories";
import ParentDashboard from "./pages/ParentDashboard";
import React, { useState } from "react";
import ProtectedRoute from "./components/ProtectedRout";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          children={
            <HomePage
              setToken={setToken}
              setUser={setUser}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/upload" component={Upload} />
        <ProtectedRoute
          exact
          path="/admin"
          component={AdminPage}
          loggedIn={loggedIn}
        />
        <Route exact path="/adminusers" component={AdminManageUsers} />
        <Route
          exact
          path="/admincategories"
          component={AdminManageCategories}
        />
        <ProtectedRoute
          exact
          path="/parent"
          component={ParentDashboard}
          loggedIn={loggedIn}
        />
      </Switch>
    </Router>
  );
}

export default App;
