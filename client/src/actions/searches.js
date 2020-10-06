import axios from 'axios';
import { setAlert } from './alert';
import { movieApi, bookApi, videoGameApi } from '../config';
import { SET_RESULTS, RESULTS_ERROR } from './types';

export const getMovieResults = (input) => async (dispatch) => {
	try {
		const moviesRequest = await axios.get(movieApi.endpoint, {
			params: {
				apikey: movieApi.key,
				s: input,
			},
		});
		if (moviesRequest.data.Search) {
			dispatch({
				type: SET_RESULTS,
				payload: moviesRequest.data.Search,
			});
		} else {
			dispatch({
				type: RESULTS_ERROR,
				payload: { message: 'no results found' },
			});
		}
	} catch (err) {
		dispatch({
			type: RESULTS_ERROR,
			payload: err,
		});
	}
};

export const getVideoGameResults = (input) => async (dispatch) => {
	try {
		const gameRequest = await axios.get(videoGameApi.endpoint, {
			params: {
				api_key: videoGameApi.key,
				format: 'json',
				query: input,
			},
		});
		console.log(gameRequest.data.results);
		if (gameRequest.data.results.length > 0) {
			dispatch({
				type: SET_RESULTS,
				payload: gameRequest.data.results,
			});
		} else {
			dispatch({
				type: RESULTS_ERROR,
				payload: { message: 'no results found' },
			});
			dispatch(setAlert('no results', 'danger'));
		}
	} catch (err) {
		dispatch({
			type: RESULTS_ERROR,
			payload: err,
		});
	}
};

export const getBookResults = (input) => async (dispatch) => {
	try {
		const bookRequest = await axios.get(bookApi.endpoint, {
			params: {
				q: input,
			},
		});
		if (bookRequest.data.items) {
			dispatch({
				type: SET_RESULTS,
				payload: bookRequest.data.items,
			});
		} else {
			dispatch({
				type: RESULTS_ERROR,
				payload: { message: 'no results found' },
			});
		}
	} catch (err) {
		dispatch({
			type: RESULTS_ERROR,
			payload: err,
		});
	}
};
