import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

const PostItem = ({ post }) => {
	const { _id, title, content, imgUrl, date } = post;

	return (
		<div className='card-post' keys={_id}>
			<h3>{title.toUpperCase()}</h3>
			<img className='image' src={imgUrl} alt={'postImage: ' + title} />
			{/* <img className='image' src={imgUrl ? imgUrl : defaultImage} /> */}
			<div className='card-container'>
				<h6>Posted on {date.slice(0, 10)}</h6>
				<p>{content}</p>
			</div>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired
};

PostItem.defaultProps = {
	imgUrl: defaultImage
};

export default PostItem;
