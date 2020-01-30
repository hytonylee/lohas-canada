import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/lohas-logo-white.svg';

const NavBar = () => {
	return (
		<nav className='navbar bg-blue'>
			<h1>
				<img
					src='lohas-logo-white.svg'
					alt='lohas-white'
					style={{ height: '8vh' }}
				/>
			</h1>
			<ul>
				<Link to='/'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/product'>Product</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/dashboard'>
					<i className='fas fa-tools'></i>
				</Link>
				<Link to='/shop'>
					<li>
						<i className='fas fa-shopping-cart'></i>
					</li>
				</Link>
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
