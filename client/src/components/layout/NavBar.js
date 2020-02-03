import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';
import '../../public/lohas-logo-white.svg';

const NavBar = () => {
	const authContext = useContext(AuthContext);
	const postContext = useContext(PostContext);
	const { isAuthenticated, logout, user } = authContext;
	// const { clearPosts } = postContext;

	const onLogout = () => {
		logout();
		// clearPosts();
	};

	const authLinks = (
		<Fragment>
			<Link to='/dashboard'>
				<i className='fas fa-tools'></i>
			</Link>
			<li>
				<a onClick={onLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>{' '}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	return (
		<nav className='navbar bg-blue'>
			<h1>
				<Link to='/'>
					<img
						src='lohas-logo-white.svg'
						alt='lohas-white'
						style={{ height: '8vh' }}
					/>
				</Link>
			</h1>
			<ul>
				<Link to='/'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/product'>Product</Link>
				<Link to='/blog'>Blog</Link>
				<a href='mailto:name@email.com?Subject=Inquiry%20from%20the%20website'>
					Contact
				</a>
				<Link to='/shop'>
					<li>
						<i className='fas fa-shopping-cart'></i>
					</li>
				</Link>
				{isAuthenticated ? authLinks : null}
			</ul>
		</nav>
	);
};

// NavBar.defaultProps = {
// 	title: ' Github Repo Finder',
// 	icon: 'fab fa-github'
// };

// NavBar.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	icon: PropTypes.string.isRequired
// };

export default NavBar;
