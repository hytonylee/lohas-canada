import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => {
	const { _id, title, content } = post;

	return (
		<div className='card' key={_id}>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostItem;
