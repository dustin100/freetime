import {
	SET_MOVIES,
	MOVIES_ERROR,
	SET_GAMES,
	GAMES_ERROR,
	SET_BOOKS,
	BOOKS_ERROR,
	CLEAR_RESULTS,
	COMPONENT_LOADED,
} from '../actions/types';

const initialState = {
	userInput: '',
	results: [],
	loading: true,
	error: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_MOVIES:
		case SET_GAMES:
		case SET_BOOKS:
			return {
				...state,
				results: payload,
				loading: false,
				error: null,
			};

		case MOVIES_ERROR:
		case GAMES_ERROR:
		case BOOKS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				results: [],
			};
		case CLEAR_RESULTS:
			return {
				...state,
				error: null,
				loading: true,
				results: [],
			};
		case COMPONENT_LOADED: {
			return {
				...state,
				loading: false,
			};
		}

		default:
			return state;
	}
}
