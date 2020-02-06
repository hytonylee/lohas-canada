import React, { Fragment, useContext, useEffect } from 'react';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostContext from '../../context/post/postContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Posts = () => {
	const postContext = useContext(PostContext);
	const { posts, loading, getAllPosts, filtered } = postContext;

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
				<TransitionGroup>
					{filtered !== null
						? filtered.map(post => (
								<CSSTransition key={post._id} timeout={500} classNames='item'>
									<PostItem post={post} />
								</CSSTransition>
						  ))
						: posts.map(post => (
								<CSSTransition key={post._id} timeout={500} classNames='item'>
									<PostItem post={post} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Posts;
