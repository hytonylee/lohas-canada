import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts page='front page' />
			</div>
		</Fragment>
	);
};

export default Home;
