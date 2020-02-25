import React, { useEffect, useContext } from 'react';
import PostContext from '../../context/post/postContext';
import SlideItem from '../layout/SlideItem';
import PreLoader from '../layout/PreLoader';
import M from 'materialize-css/dist/js/materialize.min.js';

const Slider = ({ slides }) => {
	const postContext = useContext(PostContext);
	const { loading } = postContext;

	useEffect(() => {
		let slider = document.querySelectorAll('.slider');
		let options = {
			indicators: true,
			height: 250,
			inDuration: 300,
			outDuration: 300,
			hover: true, // Activate on hover
			coverTrigger: true // Displays dropdown below the button
		};
		M.Slider.init(slider, options);
	}, []);
	return (
		<div className='slider slideWrapper'>
			<ul className='slides'>
				{slides !== null && !loading ? (
					slides.map(slide => <SlideItem slide={slide} key={slide.id} />)
				) : (
					<PreLoader />
				)}
			</ul>
		</div>
	);
};

export default Slider;
