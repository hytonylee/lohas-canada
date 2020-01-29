import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Post from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Post />
			</div>
		</Fragment>
	);
};

export default Home;
