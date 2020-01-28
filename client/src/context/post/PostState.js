import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
	GET_POSTS,
	// GET_ALL_POSTS,
	// ADD_POST,
	// DELETE_POST,
	// SET_CURRENT,
	// CLEAR_CURRENT,
	// UPDATE_POST,
	// FILTER_POSTS,
	// CLEAR_POSTS,
	// CLEAR_FILTER,
	POST_ERROR
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
			const res = await axios.get('/api/posts');
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

	// Add post

	// Delete post

	// Update Post

	// Set Current Post

	// Clear Current Post

	// Filtered Posts

	// Clear Filter

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				getPosts
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
