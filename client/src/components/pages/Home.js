import React, { Fragment, useEffect, useContext } from 'react';
import PostContext from '../../context/post/postContext';
import Slider from '../layout/Slider';
import Posts from '../posts/Posts';

const Home = () => {
	const postContext = useContext(PostContext);
	const { slides, getPostSlide } = postContext;
	useEffect(() => {
		getPostSlide();
	}, []);

	return (
		<Fragment>
			<Slider slides={slides} />
			<div className='divider' style={{ marginBottom: '10px' }}></div>
			<div className='container' style={{ zIndex: '-999' }}>
				<Posts postSection='home' />
			</div>
		</Fragment>
	);
};

export default Home;
