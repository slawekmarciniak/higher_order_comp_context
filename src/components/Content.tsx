import { FC } from "react";
import Movies from "./Movies";
import Places from "./Places";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/places">Places</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Content;
