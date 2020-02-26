import React, { Fragment } from 'react';
import Slider from '../layout/Slider';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Slider />
			<div className='divider' style={{ marginBottom: '10px' }}></div>
			<div className='container' style={{ zIndex: '-10' }}>
				<Posts postSection='home' style={{ zIndex: '-10' }} />
			</div>
		</Fragment>
	);
};

export default Home;
