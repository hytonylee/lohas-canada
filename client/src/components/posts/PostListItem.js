import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import PostContext from '../../context/post/postContext';

import M from 'materialize-css/dist/js/materialize.min.js';

const PostListItem = ({ post, index }) => {
	const postContext = useContext(PostContext);
	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { _id, title, date, status, section } = post;

	const onDelete = () => {
		deletePost(_id);
		clearCurrent();
		M.toast({ html: `Post ${title} is deleted!!` });
	};

	return (
		<Fragment>
			<div className='row' style={{ margin: '0px' }}>
				<span style={{ fontSize: '0.75rem', margin: '0' }}>
					<b>Posted on </b>
					{date.slice(0, 10)}{' '}
				</span>
			</div>
			<div className='row'>
				<div className='col l2 S2'>
					<span>
						{index}.<b style={{ paddingLeft: '2px' }}>{title}</b>
					</span>
				</div>
				<div className='col l2 S2'>
					<b>Section: </b> {section}
				</div>
				<div className='col l2 S2'>
					<b>Status: </b> {status}
				</div>
				<div className='col l2 S2 grid-3'>
					{' '}
					<a
						href='#edit-post-modal'
						className='modal-trigger'
						onClick={() => setCurrent(post)}
					>
						<i className='material-icons grey-text'>edit</i>
						{` `}
					</a>
					<a href='#!' onClick={onDelete}>
						<i className='material-icons grey-text'>delete</i>
					</a>
				</div>
			</div>
			<div className='divider'></div>
		</Fragment>
	);
};

PostListItem.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostListItem;
