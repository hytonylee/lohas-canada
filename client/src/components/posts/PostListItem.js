import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import PostContext from '../../context/post/postContext';

const PostListItem = ({ post, index }) => {
	const postContext = useContext(PostContext);
	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { _id, title, content, imgUrl, date, status, section } = post;

	const onDelete = () => {
		deletePost(_id);
		clearCurrent();
	};

	return (
		<Fragment>
			<span style={{ fontSize: '0.75rem', margin: '0' }}>
				<b>Posted on </b>
				{date.slice(0, 10)}
			</span>
			<div
				className='card cardWrapper grid-4'
				key={_id}
				style={{
					marginTop: '0rem',
					marginBottom: '0.5rem',
					paddingTop: '0.5rem',
					paddingLeft: '1rem'
				}}
			>
				<div class='col l2 S2'>
					<span>
						{index}.<b style={{ paddingLeft: '2px' }}>{title}</b>
					</span>
				</div>
				<div class='col l2 S2'>
					<b>Section: </b> {section}
				</div>
				<div class='col l2 S2'>
					<b>Status: </b> {status}
				</div>
				<div class='col l2 S2 grid-3'>
					<a onClick={() => setCurrent(post)}>
						<i className='material-icons grey-text'>edit</i>
						{` `}
					</a>
					<a onClick={onDelete}>
						<i className='material-icons grey-text'>delete</i>
					</a>
				</div>
			</div>
		</Fragment>
	);
};

PostListItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListItem;
