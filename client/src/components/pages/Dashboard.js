import React, { useContext, useEffect } from 'react';
import Posts from '../posts/Posts';
import PostFilter from '../posts/PostFilter';
import AddPostModal from '../posts/AddPostModal';
import AuthContext from '../../context/auth/authContext';

import M from 'materialize-css/dist/js/materialize.min.js';

const Dashboard = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		M.AutoInit();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='container'>
			<PostFilter />
			<AddPostModal />
			<Posts postSection='dashboard' />
		</div>
	);
};

export default Dashboard;
