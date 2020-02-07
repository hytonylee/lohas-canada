import React, { Fragment } from 'react';
import AdminPosts from '../posts/AdminPosts';
import PostFilter from '../posts/PostFilter';

const Dashboard = () => {
	return (
		<Fragment>
			<div className='container'>
				<PostFilter />
				<AdminPosts page='blog' />
			</div>
		</Fragment>
	);
};

export default Dashboard;
