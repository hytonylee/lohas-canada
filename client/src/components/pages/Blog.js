import React, { Fragment, useContext, useEffect } from 'react';
import PostFilter from '../posts/PostFilter';
import Posts from '../posts/Posts';
import AuthContext from '../../context/auth/authContext';

const Blog = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<Fragment>
			<div className='container'>
				<PostFilter />
				<Posts page='blog' />
			</div>
		</Fragment>
	);
};

export default Blog;
