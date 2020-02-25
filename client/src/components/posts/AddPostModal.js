import React, { useContext, useState, useEffect } from 'react';
import PostContext from '../../context/post/postContext';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';

const AddPostModal = () => {
	const postContext = useContext(PostContext);
	const { addPost, current, clearCurrent, updatePost } = postContext;

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
								name='homeSlide'
								value={!homeSlide}
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
							{/* <FroalaEditor
								type='text'
								name='content'
								value={content}
								// id='textarea1'
								// className='materialize-textarea'
								onChange={onChange}
							/> */}
							{/* <textarea
								type='text'
								name='content'
								value={content}
								id='textarea1'
								className='materialize-textarea'
								onChange={onChange}
							></textarea> */}
							{/* <label htmlFor='content'>Input Post Content</label> */}
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

export default AddPostModal;
