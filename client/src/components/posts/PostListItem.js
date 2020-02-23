import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PostContext from '../../context/post/postContext';

const PostListItem = ({ post }) => {
	const postContext = useContext(PostContext);
	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { _id, title, content } = post;

	const onDelete = () => {
		deletePost(_id);
		clearCurrent();
	};

	return (
		<div className='card bg-light cardWrapper' key={_id}>
			<h3>{title}</h3>
			<p>{content.slice(0, 150)}...</p>
			<p>
				<button
					className='btn btn-dark btn-sm'
					onClick={() => setCurrent(post)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

PostListItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListItem;
