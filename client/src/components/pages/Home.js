import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Post from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Post page='front page' />
			</div>
		</Fragment>
	);
};

export default Home;
