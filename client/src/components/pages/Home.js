import React, { Fragment } from 'react';
import Slider from '../layout/Slider';
import Posts from '../posts/Posts';

const Home = () => {
	return (
		<Fragment>
			<Slider />
			<div className='divider' style={styles.divider}></div>
			<div className='container' style={styles.container}>
				<Posts postSection='home' style={styles.home} />
			</div>
		</Fragment>
	);
};

const styles = {
	divider: {
		marginBottom: '10px'
	},
	container: {
		zIndex: '-10'
	},
	home: {
		zIndex: '-10'
	}
};

export default Home;
