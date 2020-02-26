import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
	GET_ONE_POST,
	GET_POSTS,
	GET_POSTS_BY_SLIDE,
	GET_POSTS_BY_SECTION,
	GET_ALL_POSTS,
	ADD_POST,
	DELETE_POST,
	SET_CURRENT,
	UPDATE_POST,
	FILTER_POSTS,
	CLEAR_POSTS,
	CLEAR_FILTER,
	POST_ERROR,
	CLEAR_CURRENT
} from '../types';

const PostState = props => {
	const initialState = {
		postSection: 'home',
		posts: null,
		slides: null,
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	// Get Single Post (Public)
	const getOnePost = async id => {
		try {
			const res = await axios.get(`/api/posts/post/${id}`);
			dispatch({
				type: GET_ONE_POST,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				error: err.response
			});
		}
	};

	// Get Posts (Public)
	const getPosts = async () => {
		try {
			const res = await axios.get('/api/posts/');
			dispatch({
				type: GET_POSTS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				error: err.response.msg
			});
		}
	};

	// Get Posts (Slides / Public)
	const getPostSlide = async () => {
		try {
			const res = await axios.get('/api/posts/slide');
			dispatch({
				type: GET_POSTS_BY_SLIDE,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				error: err
			});
		}
	};

	// Get Post by Section (Public)
	const getPostsBySection = async postSection => {
		try {
			const res = await axios.get(`/api/posts/section/${postSection}`);
			dispatch({
				type: GET_POSTS_BY_SECTION,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				error: err
			});
			console.log('this is err: ' + err);
		}
	};

	// Get All Posts (Private)
	const getAllPosts = async () => {
		try {
			const res = await axios.get('/api/posts/dashboard');
			dispatch({
				type: GET_ALL_POSTS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				error: err.response.msg
			});
		}
	};

	// Clear Posts after log out
	const clearPosts = () => {
		dispatch({
			type: CLEAR_POSTS
		});
	};

	// Add post
	const addPost = async post => {
		const config = {
			headers: {
				'Context-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/posts/dashboard', post, config);

			dispatch({
				type: ADD_POST,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response
			});
		}
	};

	// Delete post
	const deletePost = async id => {
		try {
			await axios.delete(`/api/posts/dashboard/${id}`);
			dispatch({
				type: DELETE_POST,
				payload: id
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Update Post
	const updatePost = async post => {
		const config = {
			headers: {
				'Context-Type': 'application/json'
			}
		};

		try {
			const res = await axios.put(
				`/api/posts/dashboard/${post._id}`,
				post,
				config
			);

			dispatch({
				type: UPDATE_POST,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Set Current Post
	const setCurrent = post => {
		dispatch({
			type: SET_CURRENT,
			payload: post
		});
	};

	// Clear Current Post
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		});
	};

	// Filtered Posts
	const filterPosts = text => {
		dispatch({
			type: FILTER_POSTS,
			payload: text
		});
	};

	// Clear Filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER
		});
	};

	return (
		<PostContext.Provider
			value={{
				postSection: state.postSection,
				posts: state.posts,
				slides: state.slides,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				getOnePost,
				getPosts,
				getPostSlide,
				getPostsBySection,
				getAllPosts,
				addPost,
				updatePost,
				deletePost,
				clearPosts,
				clearCurrent,
				setCurrent,
				filterPosts,
				clearFilter
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
