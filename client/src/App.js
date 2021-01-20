import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/HomePage";
import Categories from "./pages/CategoriesPage";
import PlayPage from "./pages/PlayPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/play" component={PlayPage}/>
        <Route exact path="/test" component={TestPage}/>
      </Switch>
    </Router>
  );
}

export default App;
