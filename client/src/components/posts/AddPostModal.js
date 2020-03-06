import React, { useContext, useState, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import PropTypes from 'prop-types';

const AddPostModal = () => {
	const postContext = useContext(PostContext);
	const { addPost, current, clearCurrent, updatePost } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				title: '',
				slide: false,
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
		slide: false,
		imgUrl: '',
		current: '',
		status: 'draft;'
	});

	const { title, section, imgUrl, slide, content, status } = post;

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
		<div
			id={current === null ? `add-post-modal` : `edit-post-modal`}
			className='modal'
		>
			<div className='modal-content'>
				<h4>Create A Post</h4>

				<div className='row'>
					<div className='input-field'>
						<input type='text' name='title' value={title} onChange={onChange} />
						<label htmlFor='title' className='active'>
							Title
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='imgUrl'
							value={imgUrl}
							onChange={onChange}
						/>
						<label htmlFor='imgUrl' className='active'>
							Add Image Url
						</label>
					</div>
				</div>
				<div className='row'>
					<p>
						<label>
							<input
								type='checkbox'
								name='slide'
								value={!slide}
								onChange={onChange}
							/>
							<span> Set post in Homepage Slider: </span>
						</label>
					</p>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='section'
							value={section}
							className='browser-default'
							onChange={onChange}
						>
							<option value='' disabled>
								Choose the post location
							</option>
							<option value='home'>Homepage</option>
							<option value='blog'>Blog</option>
							<option value='product'>Product</option>
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='status'
							value={status}
							className='browser-default'
							onChange={onChange}
						>
							<option value='' disabled>
								Choose Post Status
							</option>
							<option value='draft'>Draft</option>
							<option value='published'>Published</option>
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='row'>
						<div className='input-field col s12'>
							<label htmlFor='content' className='active'>
								Add Post Content
							</label>
							<textarea
								type='text'
								name='content'
								value={content}
								id='textarea1'
								// className='materialize-textarea'
								onChange={onChange}
							></textarea>
						</div>
					</div>
				</div>
				<div className='modal-footer'>
					<a
						href='#!'
						className='modal-close waves-effect waves blue btn'
						onClick={onSubmit}
					>
						Enter
					</a>
				</div>
			</div>
		</div>
	);
};

AddPostModal.proptTypes = {
	post: PropTypes.object.isRequired,
	addPost: PropTypes.func,
	updatePost: PropTypes.func,
	clearCurrent: PropTypes.object,
	current: PropTypes.string
};

export default AddPostModal;
