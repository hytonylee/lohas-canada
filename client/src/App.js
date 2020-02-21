import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Blog from './components/pages/Blog';
// import Shop from './components/pages/Shop';
import NotFound from './components/pages/NotFound';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

// State
import PostState from './context/post/PostState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

// Styles
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { StickyContainer, Sticky } from 'react-sticky';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		// Initialize Materialize JS
		M.AutoInit();
	});

	return (
		<AuthState>
			<PostState>
				<AlertState>
					<Router>
						<div className='content'>
							<StickyContainer>
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
									{/* <Route exact path='/shop' component={Shop} /> */}
									<Route exact path='/login' component={Login} />
									<Route path='*' component={NotFound} />
								</Switch>
								<div className='push'></div>
								<Footer />
							</StickyContainer>
						</div>
					</Router>
				</AlertState>
			</PostState>
		</AuthState>
	);
};

export default App;
