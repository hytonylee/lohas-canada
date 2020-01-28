import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Post from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Post />
				{/* <div className='card'>
					<h3>About Us</h3>
					<p>
						Founded in 2008, we started to grow blueberries naturally without
						the use of chemicals and pesticides. We are oragnic produce farms
						that produce high quality blueberries and apples, and operate both
						in BC and Prince Edward Island.
					</p>
				</div>
				<div className='card'>
					<h3>Our Mission</h3>
					<p>
						Founded in 2008, we started to grow blueberries naturally without
						the use of chemicals and pesticides. We are oragnic produce farms
						that produce high quality blueberries and apples, and operate both
						in BC and Prince Edward Island.
					</p>
				</div> */}
			</div>
		</Fragment>
	);
};

export default Home;
