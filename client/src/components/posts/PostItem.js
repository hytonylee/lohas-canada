import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import PostContext from '../../context/post/postContext';

const PostItem = ({ post }) => {
	// const postContact = useContext(PostContext);
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
