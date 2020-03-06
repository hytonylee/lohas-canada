import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

// Components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Blog from './components/pages/Blog';
import Post from './components/posts/Post';
import AddPostModal from './components/posts/AddPostModal';
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
		let slider = document.querySelectorAll('.slider');
		let options = {
			indicators: true,
			height: 250,
			inDuration: 300,
			outDuration: 300
			// hover: false // Activate on hover
			// coverTrigger: false // Displays dropdown below the button
		};
		M.Slider.init(slider, options);
	});

	return (
		<AuthState>
			<PostState>
				<AlertState>
					<Router>
						<ScrollToTop />
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
								<Route path='/post/:id' component={Post} />
								<Route path='*' component={NotFound} />
							</Switch>
							<AddPostModal />
							<Footer />
						</StickyContainer>
					</Router>
				</AlertState>
			</PostState>
		</AuthState>
	);
};

export default App;
