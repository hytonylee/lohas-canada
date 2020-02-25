import React, { useEffect, useContext } from 'react';
import PostContext from '../../context/post/postContext';
import SlideItem from '../layout/SlideItem';
import PreLoader from '../layout/PreLoader';

const Slider = ({ slides }) => {
	const postContext = useContext(PostContext);
	const { loading } = postContext;
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
