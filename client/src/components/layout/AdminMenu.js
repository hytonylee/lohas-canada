import React, { useContext } from 'react';
// import PostForm from '../posts/PostForm';
import AuthContext from '../../context/auth/authContext';
// import ReactModal from 'react-modal';
// import { useModal } from 'react-modal-hook';

const AdminMenu = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	// const [showModal, hideModal] = useModal(() => (
	// 	<ReactModal isOpen>
	// 		{/* <PostForm /> */}
	// 		<button onClick={hideModal}>Hide modal</button>
	// 	</ReactModal>
	// ));

	return (
		<div style={{ backgroundColor: '#3f3e3e', height: '30px', color: 'white' }}>
			<div className='sub-menu'>
				<ul>
					<li>Hello, {user && user.name}!! </li>
				</ul>
				{/* <ul>
					<li onClick={showModal}>
						<i className='fas fa-plus-circle' /> Post
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default AdminMenu;
