import React, { Fragment, useContext, useEffect } from 'react';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostContext from '../../context/post/postContext';

const Posts = () => {
	const postContext = useContext(PostContext);
	const { posts, loading, getAllPosts } = postContext;

	useEffect(() => {
		getAllPosts();
		// eslint-disable-next-line
	}, []);

	if (posts !== null && posts.length === 0 && !loading) {
		return <h4>Loading Error: unable to load any posts</h4>;
	}

	return (
		<Fragment>
			{posts !== null && !loading ? (
				posts.map(post => <PostItem key={post._id} post={post} />)
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Posts;
