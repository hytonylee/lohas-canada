import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

const Post = ({ match }) => {
	const postContext = useContext(PostContext);
	const {
		params: { id }
	} = match;
	const { posts, getPost } = postContext;

	useEffect(() => {
		getPost(id);
		console.log(posts);
	}, []);

	return (
		<Fragment>
			{/* <img src={`${imgUrl}`} style={{ minHeight: '100vh', minWidth: '100%' }} />
			<div className='container' style={{ backgroundColor: 'white' }} key={id}>
				<h1 className='bg-blue'>{title}</h1>
				<h6>Posted on {date.slice(0, 10)}</h6>
				<div className='divider'></div>
				<div>
					<p>{content}</p>
				</div>
			</div> */}
			Hello World!
		</Fragment>
	);
};

export default Post;
