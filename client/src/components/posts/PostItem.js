import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

const PostItem = ({ post }) => {
	const { _id, title, content, imgUrl, date } = post;

	return (
		<div className='card-post' keys={_id}>
			<img className='image' src={imgUrl ? imgUrl : defaultImage} />
			<div className='card-container'>
				<h3>{title}</h3>
				<h6>{date}</h6>
				<p>{content}</p>
			</div>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostItem;
