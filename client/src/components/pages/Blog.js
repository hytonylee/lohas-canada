import React, { Fragment } from 'react';
import Posts from '../posts/Posts';
import PostFilter from '../posts/PostFilter';

const Blog = () => {
	return (
		<Fragment>
			<div className='container'>
				<PostFilter />
				<Posts postSection='blog' />
			</div>
		</Fragment>
	);
};

export default Blog;
