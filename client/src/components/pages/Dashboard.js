import React from 'react';
import AdminPosts from '../posts/AdminPosts';
import PostFilter from '../posts/PostFilter';
import PostForm from '../posts/PostForm';

const Dashboard = () => {
	return (
		<div className='container grid-2'>
			<div>
				<PostForm />
			</div>
			<div className='container'>
				<PostFilter />
				<AdminPosts page='blog' />
			</div>
		</div>
	);
};

export default Dashboard;
