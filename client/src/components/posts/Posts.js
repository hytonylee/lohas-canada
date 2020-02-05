import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostContext from '../../context/post/postContext';

const Posts = ({ page }) => {
	const postContext = useContext(PostContext);
	const { posts, filtered, loading, getPosts } = postContext;

	useEffect(() => {
		getPosts();
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
									{posts.map(post =>
										post.section === `${page}` ? (
											<PostItem key={post._id} post={post} />
										) : null
									)}
								</CSSTransition>
						  ))
						: posts.map(post => (
								<CSSTransition key={post._id} timeout={500} classNames='item'>
									{posts.map(post =>
										post.section === `${page}` ? (
											<PostItem key={post._id} post={post} />
										) : null
									)}
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

// {
// posts !== null && !loading ? (
// posts.map(post =>
// 	post.section === `${page}` ? (
// 		<PostItem key={post._id} post={post} />
// 	) : null
// )
// ) : (
// 		<Spinner />
// 	)
// }
