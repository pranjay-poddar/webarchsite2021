import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Home from '../components/Home';
import Team from '../components/Team';

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
			</Switch>
		</div>
	);
}

export default Main;
