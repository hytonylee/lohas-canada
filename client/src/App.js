import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

// State
import PostState from './context/post/PostState';

// Styles
import './App.css';

const App = () => {
	return (
		<PostState>
			<Router>
				<Fragment>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/product' component={Product} />
						<Route exact path='/blog' component={Blog} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/shop' component={Shop} />
						<Route exact path='/login' component={Login} />
					</Switch>
					<Footer />
				</Fragment>
			</Router>
		</PostState>
	);
};

export default App;
