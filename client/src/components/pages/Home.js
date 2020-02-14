import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts page='home' />
			</div>
		</Fragment>
	);
};

export default Home;
