import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Posts from '../posts/Posts';
import PostFilter from '../posts/PostFilter';

const Blog = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<PostFilter />
				<Posts postSection='blog' />
			</div>
		</Fragment>
	);
};

export default Blog;
