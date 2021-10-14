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
          <Footer alt/>
        </Route>
        <Route exact path="/team">
          <Team />
          <Footer />
        </Route>
        <Route exact path="/projects">
          <Projects />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;

