import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Home from './Home';
import Team from './Team';
import Services from './Services'

function Main() {
	return (
		<div className="Main">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
                <Route exact path='/team'>
                    <Team />
                </Route>
				<Route exact path='/services'>
                    <Services />
                </Route>
			</Switch>
		</div>
	);
}

export default Main;
