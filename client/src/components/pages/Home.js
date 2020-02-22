import React, { Fragment, useEffect } from 'react';
// import Display from '../layout/Display';
import Posts from '../posts/Posts';
import M from 'materialize-css/dist/js/materialize.min.js';

const Home = () => {
	useEffect(() => {
		const instance = M.Slider.init(_slider.current, options);

		if (activeIndex) {
			if (typeof indicators === 'undefined' || options.indicators) {
				instance['$indicators'][activeIndex].className =
					'indicator-item active';
			}
		}

		return () => {
			if (instance) {
				setActiveIndex(instance.activeIndex);
				instance.destroy();
			}
		};
	}, [_slider, options, fullscreen, activeIndex]);

	return (
		<Fragment>
			{/* <Display /> */}
			<div className='slider slideWrapper'>
				<ul className='slides'>
					<li>
						<img src='https://lorempixel.com/580/250/nature/1' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
					<li>
						<img src='https://lorempixel.com/580/250/nature/2' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
					<li>
						<img src='https://lorempixel.com/580/250/nature/3' />
						<div className='caption center-align'>
							<h3>This is our big Tagline!</h3>
							<h5 className='light grey-text text-lighten-3'>
								Here is our small slogan.
							</h5>
						</div>
					</li>
				</ul>
			</div>
			<div className='container'>
				<Posts postSection='home' />
			</div>
		</Fragment>
	);
};

export default Home;
