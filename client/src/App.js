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
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userlevel, setUserlevel] = useState();

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
              setLoggedIn={setLoggedIn}
              userlevel={userlevel}
              setUserlevel={setUserlevel}
              loggedIn={loggedIn}
            />
          }
        />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/upload" component={Upload} />
        <AdminProtectedRoute
          exact
          path="/admin"
          component={AdminPage}
          userlevel={userlevel}
          setUserlevel={setUserlevel}
        />
        <AdminProtectedRoute 
        exact path="/adminusers" 
        component={AdminManageUsers} 
        userlevel={userlevel}
        setUserlevel={setUserlevel}
        />

        <AdminProtectedRoute
          exact path="/admincategories"
          component={AdminManageCategories}
          userlevel={userlevel}
        />

        <ProtectedRoute
          exact
          path="/parent"
          component={ParentDashboard}
          loggedIn={loggedIn}
          user={user}
        />
      </Switch>
    </Router>
  );
}

export default App;