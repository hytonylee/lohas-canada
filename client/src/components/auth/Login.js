import React, { Fragment } from 'react';
import Display from '../layout/Display';

const Login = () => {
	return (
		<Fragment>
			<Display />
			<div className='container p-1'>
				<div className='form-container'>
					<h1>
						<span className='text-primary'>Dashboard Login</span>
					</h1>
					<form>
						<div className='form-group'>
							<label htmlFor='email'>Email Address</label>
							<input
								type='email'
								name='email'
								// value={email}
								autoComplete='email'
								onChange='#'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								name='password'
								// value={password}
								autoComplete='password'
								onChange='#'
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
