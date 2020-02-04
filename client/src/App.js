import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

// State
import PostState from './context/post/PostState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';

// Styles
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<PostState>
				<AlertState>
					<StickyContainer>
						<Router>
							<Fragment>
								<Sticky>
									{({ style }) => (
										<header style={style}>
											<NavBar />
										</header>
									)}
								</Sticky>
								<Switch>
									<PrivateRoute exact path='/dashboard' component={Dashboard} />
									<Route exact path='/' component={Home} />
									<Route exact path='/product' component={Product} />
									<Route exact path='/blog' component={Blog} />
									<Route exact path='/shop' component={Shop} />
									<Route exact path='/login' component={Login} />
								</Switch>
								<Footer />
							</Fragment>
						</Router>
					</StickyContainer>
				</AlertState>
			</PostState>
		</AuthState>
	);
};

export default App;
