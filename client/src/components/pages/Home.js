import React, { Fragment } from 'react';
// import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			{/* <Display /> */}
			<div clasName='slider'>
				<ul clasName='slides'></ul>
			</div>
			<div className='container'>
				<Posts postSection='home' />
			</div>
		</Fragment>
	);
};

export default Home;
