import React, { useReducer } from 'react';
import axio from 'axio';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
	GET_POSTS,
	GET_ALL_POSTS,
	ADD_POST,
	DELETE_POST,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_POST,
	FILTER_POSTS,
	CLEAR_POSTS,
	CLEAR_FILTER,
	POST_ERROR
} from '../types';

const PostState = props => {
	const initialState = {
		posts: null,
		current: null,
		filtered: null
	};

	const [state, dispatch] = userReducer(postReducer, initialState);

	// Get Posts (Public)

	// Get All Posts (Private)

	// Add post

	// Delete post

	// Update Post

	// Set Current Post

	// Clear Current Post

	// Filtered Posts

	// Clear Filter

	return (
		<ContactContext
			value={{
				posts: state.posts,
				current: state.current,
				filtered: state.filtered,
				error: state.error
			}}
		>
			{props.children}
		</ContactContext>
	);
};

export default PostState;
