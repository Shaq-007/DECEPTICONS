import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/HomePage";
import Categories from "./pages/CategoriesPage";
import PlayPage from "./pages/PlayPage";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
=======
import TestPage from "./pages/TestPage";
>>>>>>> 12fd3ad0f54d5e0b6e0ab4a086b0ba1ea05894c9

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/play" component={PlayPage}/>
<<<<<<< HEAD
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/signup" component={SignupPage}/>
=======
        <Route exact path="/test" component={TestPage}/>
>>>>>>> 12fd3ad0f54d5e0b6e0ab4a086b0ba1ea05894c9
      </Switch>
    </Router>
  );
}

export default App;
