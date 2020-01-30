import React, { Fragment } from 'react';
import Posts from '../posts/Posts';

const Blog = () => {
	return (
		<Fragment>
			<div className='container'>
				<Posts page='blog' />
			</div>
		</Fragment>
	);
};

export default Blog;
