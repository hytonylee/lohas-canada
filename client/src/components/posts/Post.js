import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import PreLoader from '../layout/PreLoader';

const Post = ({ match }) => {
	const postContext = useContext(PostContext);
	const {
		params: { id }
	} = match;
	const { posts, getOnePost, loading } = postContext;

	useEffect(() => {
		getOnePost(id);
	}, []);

	return (
		<Fragment>
			{posts !== null && !loading ? (
				posts.map(post => (
					<div
						className='imgWrapper'
						style={{
							backgroundImage: `url(${post.imgUrl})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							height: '100vh',
							width: '100vw',
							paddingTop: '50px'
						}}
					>
						<div
							className='container'
							style={{
								backgroundColor: 'white',
								borderRadius: '4px',
								paddingBottom: '100px'
							}}
							key={id}
						>
							<h3>{post.title}</h3>
							<h6>Posted on {post.date.slice(0, 10)}</h6>
							<div className='divider'></div>

							<p style={{ marginBottom: '20px' }}>{post.content}</p>
						</div>
					</div>
				))
			) : (
				<PreLoader />
			)}
		</Fragment>
	);
};

export default Post;
