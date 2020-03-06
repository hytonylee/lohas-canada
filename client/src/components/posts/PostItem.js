import React, { Fragment } from 'react';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

const PostItem = ({ post }) => {
	const screenSize = useMediaQuery('(min-width: 700px)');
	const { _id, title, content, imgUrl, date } = post;

	return (
		<Fragment>
			<img className='outterCardImage' src={imgUrl} />
			<div className='card-post' keys={_id}>
				{/* <div
					className='cardImage'
					style={{
						backgroundImage: screenSize ? `none` : 'url(${imgUrl})'
					}}
				> */}
				<div className='card-container'>
					<h3>{title.toUpperCase()}</h3>
					<div className='content-text'>
						<h6 style={styles.dateText}>Posted on {date.slice(0, 10)}</h6>
						<p style={styles.pText}>{content.slice(0, 400)}...</p>
					</div>
					<div></div>
					<div style={styles.moreContent}>
						<Link to={`/post/${_id}`}>(Read More)</Link>
					</div>
				</div>
			</div>

			<div className='divider'></div>
		</Fragment>
	);
};
const styles = {
	moreContent: {
		paddingLeft: '1rem',
		width: '100%',
		display: 'flex',
		alignContent: 'center',
		alignItems: 'flex-start'
	},
	dateText: {
		fontSize: '0.8rem'
	},
	pText: {
		height: '10vh'
	}
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired
};

PostItem.defaultProps = {
	imgUrl: defaultImage
};

export default PostItem;
