import {
	GET_POSTS,
	GET_ALL_POSTS,
	ADD_POST
	// DELETE_POST,
	// SET_CURRENT,
	// CLEAR_CURRENT,
	// UPDATE_POST,
	// FILTER_POSTS,
	// CLEAR_POSTS,
	// CLEAR_FILTER,
	// POST_ERROR
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case GET_ALL_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
				loading: false
			};
		default: {
			return state;
		}
	}
};
