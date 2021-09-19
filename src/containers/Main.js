import { Switch, Route } from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import Team from "./Team";
import Projects from "./Projects/Projects";

function Main() {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
