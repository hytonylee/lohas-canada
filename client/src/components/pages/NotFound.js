import React, { Fragment, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Display from '../layout/Display';

const NotFound = props => {
	useEffect(() => {
		setTimeout(() => {
			props.history.push('/');
		}, 2000);
	});

	const NotFoundPage = () => {
		return (
			<div className='container'>
				<div className='card'>
					<h1>
						<span className='text-primary'>
							<i className='fas fa-exclamation-triangle' /> Page Not Found or
							Under Construction!!
						</span>
					</h1>
				</div>
			</div>
		);
	};

	return (
		<Fragment>
			<Display />
			<Route>
				<NotFoundPage />
			</Route>
		</Fragment>
	);
};

export default NotFound;
