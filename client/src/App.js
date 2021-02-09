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

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<HomePage setToken={setToken} setUser={setUser}/>} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/adminusers" component={AdminManageUsers} />
        <Route
          exact
          path="/admincategories"
          component={AdminManageCategories}/>
        <Route exact path="/parent" component={ParentDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
