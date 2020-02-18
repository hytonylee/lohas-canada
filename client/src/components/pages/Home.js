import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Home = () => {
	const postContext = useContext(PostContext);
	const { section } = postContext;
	useEffect(() => {
		if (section !== 'home') {
			section = 'home';
		}
	}, [postContext]);

	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts />
			</div>
		</Fragment>
	);
};

export default Home;
