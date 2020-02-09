import React, { Fragment, useState, useContext, useEffect } from 'react';
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

	return <Fragment></Fragment>;
};

export default PostForm;
