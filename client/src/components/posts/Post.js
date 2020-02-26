import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import PreLoader from '../layout/PreLoader';

const Post = ({ match }) => {
	const postContext = useContext(PostContext);
	const {
		params: { id }
	} = match;
	const { post, getOnePost, loading } = postContext;
	const { section, imgUrl, content, title, date } = JSON.stringify(post);

	useEffect(() => {
		getOnePost(id);
	}, []);

	return (
		<Fragment>
			{console.log(section)}
			{post !== null && !loading ? (
				<>
					{/* <img
						src={`${post.imgUrl}`}
						style={{ minHeight: '100vh', minWidth: '100%' }}
					/>
					<div
						className='container'
						style={{ backgroundColor: 'white' }}
						key={post.id}
					>
						<h1 className='bg-blue'>{post.title}</h1>
						<h6>Posted on {post.date.slice(0, 10)}</h6>
						<div className='divider'></div>
						<div>
							<p>{post.content}</p>
						</div>
					</div> */}
					Hello World!!
				</>
			) : (
				<PreLoader />
			)}
		</Fragment>
	);
};

export default Post;
