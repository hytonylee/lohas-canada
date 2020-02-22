import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer grey darken-3'>
			<div className='footerWrapper'>
				<div className='row'>
					<div className='col l5 s12'>
						<h5 className='white-text'>About Us</h5>
						<p className='grey-text text-lighten-4'>
							Lohas Farm Canada founded in 2008, and have been managing and
							operating organic farms in both BC and PEI to produce best quality
							blueberries and apples with the mission to protect the environment
							and promoting healthy living.
						</p>
					</div>
					<div className='col l3'></div>
					<div className='col l2 s12'>
						<h5 className='white-text'>Our Partners</h5>
						<p className='grey-text text-lighten-4'>
							<ul>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='http://www.leezen.com.tw/'
									>
										LeeZen Organic
									</a>
								</li>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://gebis.org/'
									>
										GEBIS
									</a>
								</li>
							</ul>
						</p>
					</div>
					<div className='col l2 s12'>
						<h5 className='white-text'>Links</h5>
						<ul>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Link 1
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Link 2
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Link 3
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Link 4
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='footerWrapper'>© 2014 Copyright Text</div>
			</div>
		</footer>
	);
};

export default Footer;
