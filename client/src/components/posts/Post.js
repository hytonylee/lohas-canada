import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';

const Post = ({ id }) => {
	const postContext = useContext(PostContext);
	const { posts, getPost } = postContext;

	useEffect(() => {
		getPost(id);
		console.log(posts);
	}, []);

	return (
		<Fragment>
			<NavBar />
			{/* <img src={`${imgUrl}`} style={{ minHeight: '100vh', minWidth: '100%' }} />
			<div className='container' style={{ backgroundColor: 'white' }} key={id}>
				<h1 className='bg-blue'>{title}</h1>
				<h6>Posted on {date.slice(0, 10)}</h6>
				<div className='divider'></div>
				<div>
					<p>{content}</p>
				</div> */}
			Hello World!!
			{/* </div> */}
			<Footer />
		</Fragment>
	);
};

export default Post;
