import {
	GET_POSTS,
	GET_POSTS_BY_SECTION,
	GET_POSTS_BY_SLIDE,
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

export default (state, action) => {
	switch (action.type) {
		case GET_POST:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case GET_POSTS_BY_SLIDE:
			return {
				...state,
				slides: action.payload,
				loading: false
			};
		case GET_POSTS_BY_SECTION:
			return {
				...state,
				posts: action.payload,
				loading: false,
				postSection: ''
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
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post._id !== action.payload),
				loading: false
			};
		case CLEAR_POSTS:
			return {
				...state,
				posts: null,
				filtered: null,
				error: null,
				current: null
			};
		case UPDATE_POST:
			return {
				...state,
				posts: state.posts.map(post =>
					post._id === action.payload._id ? action.payload : post
				)
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case FILTER_POSTS:
			return {
				...state,
				filtered: state.posts.filter(post => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return post.title.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null
			};
		case POST_ERROR:
			return {
				...state,
				error: action.payload
			};
		default: {
			return state;
		}
	}
};
