import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
	GET_POSTS,
	GET_ALL_POSTS,
	// ADD_POST,
	// DELETE_POST,
	// SET_CURRENT,
	// CLEAR_CURRENT,
	// UPDATE_POST,
	// FILTER_POSTS,
	CLEAR_POSTS,
	// CLEAR_FILTER,
	POST_ERROR,
	CLEAR_CURRENT
} from '../types';

const PostState = props => {
	const initialState = {
		posts: null,
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

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

	// Delete post

	// Update Post

	// Set Current Post

	// Clear Current Post
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		});
	};

	// Filtered Posts

	// Clear Filter

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				getPosts,
				getAllPosts,
				clearPosts,
				clearCurrent
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
