import React, { Fragment, useContext, useEffect } from 'react';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostContext from '../../context/post/postContext';

const Posts = ({ page }) => {
	const postContext = useContext(PostContext);
	const { posts, loading, getPosts } = postContext;

	useEffect(() => {
		getPosts();
		// eslint-disable-next-line
	}, []);

	if (posts !== null && posts.length === 0 && !loading) {
		return <h4>Loading Error: unable to load any posts</h4>;
	}

	return (
		<Fragment>
			{console.log}
			{posts !== null && !loading ? (
				posts.map(post =>
					post.section === `${page}` ? (
						<PostItem key={post._id} post={post} />
					) : (
						<Spinner />
					)
				)
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Posts;
