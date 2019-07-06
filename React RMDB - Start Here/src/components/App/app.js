import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/header';
import Home from '../Home/home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';


const App = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/:movieId"  component={Movie} exact />
					<Route component={NotFound} /> 
				</Switch>
			</React.Fragment>
		</BrowserRouter>
		)
}

export default App;