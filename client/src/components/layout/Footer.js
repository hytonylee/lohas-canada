import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer grey darken-3'>
			<div className='footerWrapper'>
				<div className='row'>
					<div className='col l5 s12'>
						<h5 className='grey-text'>About</h5>
						<p className='grey-text text-lighten-1'>
							Lohas Farm Canada founded in 2008, and have been managing and
							operating organic farms in both BC and PEI to produce best quality
							blueberries and apples with the mission to protect the environment
							and promoting healthy living.
						</p>
					</div>
					<div className='col l2'></div>
					<div className='col l2 s12'>
						<h5 className='grey-text'>Partners</h5>
						<ul>
							<li>
								<a
									className='grey-text text-lighten-1'
									href='http://www.leezen.com.tw/'
								>
									LeeZen Organic
								</a>
							</li>
							<li>
								<a
									className='grey-text text-lighten-1'
									href='https://gebis.org/'
								>
									GEBIS
								</a>
							</li>
						</ul>
					</div>
					<div className='col l3 s12'>
						<h5 className='grey-text'>Products</h5>
						<ul>
							<li>
								<a className='grey-text text-lighten-1' href='#!'>
									Organic Frozen Blueberries
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-1' href='#!'>
									Organic Blueberry Enzyme
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-1' href='#!'>
									Organic Artisan Fruit Candy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='divider'></div>
			<div
				className='footerWrapper'
				style={{ paddingTop: '1rem', paddingBottom: 0, marginBottom: 0 }}
			>
				<div className='row'>
					<div className='col l2 s12'>
						<a href='#!'>
							<i className='fas fa-globe-americas'></i> English
						</a>
					</div>
					<div className='col l7 s6'></div>
					<div className='col l3 s12'>
						<a href='#!'>© Lohas Farm Canada</a>
					</div>
				</div>
				<div
					className='footer-copyright'
					style={{
						minHeight: 'initial',
						paddingTop: '0px',
						paddingBottom: '0px'
					}}
				></div>
			</div>
		</footer>
	);
};

export default Footer;
