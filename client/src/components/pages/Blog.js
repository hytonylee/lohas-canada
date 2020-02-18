import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Blog = () => {
	const postContext = useContext(PostContext);
	const { section } = postContext;
	useEffect(() => {
		if (section !== 'blog') {
			section = 'blog';
		}
	}, [postContext]);
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts />
			</div>
		</Fragment>
	);
};

export default Blog;
