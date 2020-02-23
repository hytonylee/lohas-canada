import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PostContext from '../../context/post/postContext';

const PostListItem = ({ post }) => {
	const postContext = useContext(PostContext);
	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { _id, title, content, imgUrl, date } = post;

	const onDelete = () => {
		deletePost(_id);
		clearCurrent();
	};

	return (
		<div className='card cardWrapper' key={_id}>
			<h4>{title}</h4>
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
