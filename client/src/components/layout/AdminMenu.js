import React, { useContext } from 'react';
// import PostForm from '../posts/PostForm';
import AuthContext from '../../context/auth/authContext';

const AdminMenu = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	return (
		<div
			style={{
				backgroundColor: '#3f3e3e',
				height: '50px',
				padding: '10px 10px 0 10px',
				color: 'white'
			}}
		>
			<div
				className='container'
				style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<ul>
					<li>
						Hello,
						<a href='#!'>
							{` `}
							{user && user.name}.{` `}
						</a>
						Welcome Back!!
					</li>
				</ul>

				<a
					href='#add-post-modal'
					className='btn-floating btn-small blue darken-2 modal-trigger'
				>
					<i className='small material-icons'>add</i>
				</a>
			</div>
		</div>
	);
};

export default AdminMenu;
