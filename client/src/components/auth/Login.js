import React, { Fragment, useState, useContext, useEffect } from 'react';
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
			<div className='container'>
				<div className='loginWrapper '>
					<div className='form p-2'>
						<h3>Dashboard Login</h3>
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
								className='btn btn-blue btn-block'
								style={{ paddingLeft: '2rem' }}
							/>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
