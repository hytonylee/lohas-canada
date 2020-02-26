import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';

const Post = ({ post }) => {
	const { _id, title, date, imgUrl, content } = post;
	return (
		<Fragment>
			<NavBar />
			<img src={`${imgUrl}`} style={{ minHeight: '100vh', minWidth: '100%' }} />
			<div className='container' style={{ backgroundColor: 'white' }} key={_id}>
				<h1 className='bg-blue'>{title}</h1>
				<h6>Posted on {date.slice(0, 10)}</h6>
				<div className='divider'></div>
				<div>
					<p>{content}</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Post;
