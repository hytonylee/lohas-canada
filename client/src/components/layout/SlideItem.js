import React from 'react';

const SlideItem = ({ slide }) => {
	const { title, content, imgUrl } = slide;
	return (
		<li>
			<img src={`${imgUrl}`} alt={`${title}-img`} />
			<div className='caption center-align'>
				<h3>{title}</h3>
				<h5 className='light grey-text text-lighten-3'>
					{content.slice(0, 30)}
				</h5>
			</div>
		</li>
	);
};

export default SlideItem;
