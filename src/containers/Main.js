import { Switch, Route } from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import Team from "./Team/Team";
import Projects from "./projects/Projects";
import Footer from "./Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default Main;

