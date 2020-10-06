import { USER_INPUT, SET_RESULTS, RESULTS_ERROR } from '../actions/types';

const initialState = {
	userInput: '',
	results: [],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_RESULTS:
			return {
				...state,
				results: payload,
				loading: false,
				error: {},
			};

		case RESULTS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				results: [],
			};

		default:
			return state;
	}
}
