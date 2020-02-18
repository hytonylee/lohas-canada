import React, { Fragment, useContext } from 'react';
import PostContext from '../../context/post/postContext';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts section='home' />
			</div>
		</Fragment>
	);
};

export default Home;
