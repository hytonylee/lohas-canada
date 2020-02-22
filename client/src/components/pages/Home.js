import React, { Fragment, useEffect } from 'react';
// import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			{/* <Display /> */}
			<div className='slider slideWrapper'>
				<ul className='slides'>
					<li>
						<img src='https://lorempixel.com/580/250/nature/1' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
					<li>
						<img src='https://lorempixel.com/580/250/nature/2' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
					<li>
						<img src='https://lorempixel.com/580/250/nature/3' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
				</ul>
			</div>
			<div className='container'>
				<Posts postSection='home' />
			</div>
		</Fragment>
	);
};

export default Home;
