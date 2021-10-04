import { FC } from "react";
import { Home, Places, Movies } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <div className="container__pages">
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
      </div>
    </Router>
  );
};

export default Content;
