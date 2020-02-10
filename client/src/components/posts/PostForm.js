import React, { useState, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

const PostForm = () => {
	const postContext = useContext(PostContext);
	const { addPost, updatePost, current, clearCurrent } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				title: '',
				section: '',
				imgUrl: '',
				content: '',
				status: 'draft'
			});
		}
	}, [postContext, current]);

	const [post, setPost] = useState({
		title: '',
		section: '',
		imgUrl: '',
		content: '',
		status: 'draft'
	});

	const { title, section, imgUrl, content, status } = post;

	const onChange = e => {
		setPost({
			...post,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			addPost(post);
		} else {
			updatePost(post);
		}

		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>
				{current ? 'Edit Post' : 'Create a New Post'}
			</h2>
			<input
				type='text'
				placeholer='title'
				name='title'
				value={title}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholer='image url'
				name='imgUrl'
				value={imgUrl}
				onChange={onChange}
			/>
			<h5>Post Location</h5>
			<input
				type='radio'
				name='section'
				value='front page'
				checked={section === 'front page'}
				onChange={onChange}
			/>{' '}
			<input
				type='radio'
				name='section'
				value='blog'
				checked={section === 'blog'}
				onChange={onChange}
			/>{' '}
			<input
				type='radio'
				name='section'
				value='product'
				checked={section === 'product'}
				onChange={onChange}
			/>{' '}
			<h5>Post Status</h5>{' '}
			<input
				type='radio'
				name='status'
				value='draft'
				checked={status === 'draft'}
				onChange={onChange}
			/>{' '}
			<input
				type='radio'
				name='status'
				value='completed'
				checked={status === 'completed'}
				onChange={onChange}
			/>{' '}
			<h5>Content</h5>
			<textarea
				type='text'
				placeholer='content'
				name='content'
				value={content}
				onChange={onChange}
			/>
			<div>
				<input
					type='submit'
					value={current ? 'Update Post' : 'Add Post'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default PostForm;
