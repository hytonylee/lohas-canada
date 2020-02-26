import React, { Fragment, useEffect, useContext } from 'react';
import Posts from '../posts/Posts';
import PostContext from '../../context/post/postContext';
import SlideItem from '../layout/SlideItem';
import PreLoader from '../layout/PreLoader';
import M from 'materialize-css/dist/js/materialize.min.js';

const Slider = () => {
	const postContext = useContext(PostContext);
	const { slides, getPostSlide, loading } = postContext;

	useEffect(() => {
		getPostSlide();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		let slider = document.querySelectorAll('.slider');
		let options = {
			indicators: true,
			height: 250,
			inDuration: 300,
			outDuration: 300
			// hover: false // Activate on hover
			// coverTrigger: false // Displays dropdown below the button
		};
		M.Slider.init(slider, options);
	});
	return (
		<div className='slider slideWrapper'>
			<ul className='slides'>
				{slides !== null && !loading ? (
					slides.map(slide => <SlideItem key={slide.id} slide={slide} />)
				) : (
					<PreLoader />
				)}
			</ul>
		</div>
	);
};

export default Slider;
