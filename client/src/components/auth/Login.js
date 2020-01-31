import React, { Fragment, useState, useContext, useEffect } from 'react';
import Display from '../layout/Display';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { error, login, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/dashboard');
		}

		if (error === 'Invalid Credentials!') {
			setAlert(error, 'danger');
			clearErrors();
		}

		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history, clearErrors, setAlert]);

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password
			});
		}
	};

	return (
		<Fragment>
			<Display />
			<div className='container p-1'>
				<div className='form-container'>
					<h1>
						<span className='text-primary'>Dashboard Login</span>
					</h1>
					<form onSubmit={onSubmit}>
						<div className='form-group'>
							<label htmlFor='email'>Email Address</label>
							<input
								type='email'
								name='email'
								value={email}
								autoComplete='email'
								onChange={onChange}
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								name='password'
								value={password}
								autoComplete='password'
								onChange={onChange}
								required
							/>
						</div>
						<input
							type='submit'
							value='Login'
							className='btn btn-primary btn-block'
						/>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
