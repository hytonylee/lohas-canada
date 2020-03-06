import React from 'react';
import { Link } from 'react-router-dom';

const SlideItem = ({ slide }) => {
	const { _id, title, content, imgUrl } = slide;
	return (
		<li>
			<img src={`${imgUrl}`} alt={`${title}-img`} />
			<div className='caption center-align'>
				<h4>{title}</h4>
				<h5 className='light grey-text text-lighten-3'>
					{content.slice(0, 30)}
				</h5>
			</div>
		</li>
	);
};

export default SlideItem;
