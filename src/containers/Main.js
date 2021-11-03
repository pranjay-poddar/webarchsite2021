import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.css'
import Preloader from './Preloader/Preloader'
import Footer from './Footer/Footer'
const Home = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 3.5 * 1000)).then(() =>
    import("./Home")
  );
});
const Team = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 3.5 * 1000)).then(() =>
    import("./Team/Team")
  );
});
const Projects = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 3.5 * 1000)).then(() =>
    import("./projects/Projects")
  );
});

function Main() {
  return (
    <div className='Main'>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path='/'>
            <Home />
            <Footer alt />
          </Route>
          <Route exact path='/team'>
            <Team />
            <Footer />
          </Route>
          <Route exact path='/projects'>
            <Projects />
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default Main
