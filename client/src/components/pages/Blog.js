import React, { Fragment } from 'react';
import Display from '../layout/Display';
import Posts from '../posts/Posts';

const Blog = () => {
	return (
		<Fragment>
			<Display />
			<div className='container'>
				<Posts page='blog' />
			</div>
		</Fragment>
	);
};

export default Blog;
