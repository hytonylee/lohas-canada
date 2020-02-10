import React, { Fragment, useEffect, useContext } from 'react';
import AdminPosts from '../posts/AdminPosts';
import PostFilter from '../posts/PostFilter';
import PostForm from '../posts/PostForm';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-lin
	}, []);
	return (
		<Fragment>
			<div className='grid-2'>
				<div>
					<PostForm />
				</div>
				<div className='container'>
					<PostFilter />
					<AdminPosts page='blog' />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
