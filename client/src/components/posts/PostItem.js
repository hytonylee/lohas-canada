import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

const PostItem = ({ post }) => {
	const { _id, title, content, imgUrl, date } = post;

	return (
		<div className='card-post' keys={_id}>
			<div
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '50vh',
					width: '100vw',
					paddingTop: '30px',
					paddingRight: '6rem'
				}}
			>
				<div className='card-container grid-2' style={styles.contentContainer}>
					<div>
						<h3 style={styles.titleText}>{title.toUpperCase()}</h3>
					</div>
					<div style={styles.contentText}>
						<h6 style={styles.dateText}>Posted on {date.slice(0, 10)}</h6>
						<p style={styles.pText}>
							{content.slice(0, 500)}...
							{'   '}
							<Link to={`/post/${_id}`}>(Read More)</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	contentContainer: {
		height: '100%'
	},
	titleText: {
		filter: 'invert(1)',
		color: '#5667b8',
		mixBlendMode: 'difference'
	},
	contentText: {
		backgroundColor: 'white',
		padding: '1rem',
		height: '40vh',
		width: '50vw',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
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
