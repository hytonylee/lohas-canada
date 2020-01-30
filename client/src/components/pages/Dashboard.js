import React, { Fragment } from 'react';
import AdminMenu from '../layout/AdminMenu';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Dashboard = () => {
	return (
		<Fragment>
			<TransitionGroup>
				<CSSTransition timeout={500}>
					<AdminMenu />
				</CSSTransition>
			</TransitionGroup>
			This is Dashboard.f
		</Fragment>
	);
};

export default Dashboard;
