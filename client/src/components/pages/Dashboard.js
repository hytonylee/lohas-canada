import React, { Fragment } from 'react';
import AdminMenu from '../layout/AdminMenu';
import AdminPosts from '../posts/AdminPosts';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Dashboard = () => {
	return (
		<Fragment>
			<TransitionGroup>
				<CSSTransition timeout={500}>
					<AdminMenu />
				</CSSTransition>
			</TransitionGroup>
			<div className='container'>
				This is Dashboard
				<AdminPosts page='blog' />
			</div>
		</Fragment>
	);
};

export default Dashboard;
