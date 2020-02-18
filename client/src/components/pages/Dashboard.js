import React, { useContext, useEffect } from 'react';
import AdminPosts from '../posts/AdminPosts';
import PostFilter from '../posts/PostFilter';
import PostForm from '../posts/PostForm';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='container grid-2'>
			<div>
				<PostForm />
			</div>
			<div className='container'>
				<PostFilter />
				<AdminPosts />
			</div>
		</div>
	);
};

export default Dashboard;
