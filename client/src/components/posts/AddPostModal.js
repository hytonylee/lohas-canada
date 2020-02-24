import React, { useContext, useState, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

const AddPostModal = () => {
	const postContext = useContext(PostContext);
	const { addPost, current, clearCurrent } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				title: '',
				homeSlide: false,
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
		homeSlide: false,
		imgUrl: '',
		current: '',
		status: 'draft;'
	});

	const { title, section, imgUrl, homeSlide, content, status } = post;

	const onChange = e => {
		setPost({
			...post,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		addPost(post);
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<div id='add-post-modal' className='modal'>
			<div className='modal-content'>
				<h4>Create A Post</h4>
			</div>
			<form onSubmit={onSubmit}>
				<div className='row'>
					<input type='text' name='title' />
					<label htmlFor='title' className='active' value={title}>
						Title
					</label>
				</div>
				<div className='modal-footer'>
					<a
						href='#!'
						className='modal-close waves-effect waves blue btn'
						onChange={onChange}
					>
						Enter
					</a>
				</div>
			</form>
		</div>
	);
};

export default AddPostModal;
