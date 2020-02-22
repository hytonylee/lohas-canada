import React, { Fragment } from 'react';
// import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			{/* <Display /> */}
			<div className='slider slideWrapper'>
				<ul className='slides'></ul>
			</div>
			<div className='container'>
				<Posts postSection='home' />
			</div>
		</Fragment>
	);
};

export default Home;
