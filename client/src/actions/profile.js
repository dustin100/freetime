import axios from 'axios';
import { setAlert } from './alert';
import { PROFILE_ERROR, GET_PROFILE, UPDATE_LISTS } from './types';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/me');

		dispatch({ type: GET_PROFILE, payload: res.data });
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.statusText, status: err.response.status },
		});
	}
};

// Profile Setup
export const createProfile = (setupData, history, edit = false) => async (
	dispatch
) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.post('/api/profile', setupData, config);

		dispatch({ type: GET_PROFILE, payload: res.data });
		if (edit) {
			history.push('/get-started');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.statusText, status: err.response.status },
		});
	}
};

// Add movie
export const addMovie = (cardObject) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await axios.put('/api/profile/movies', cardObject, config);

		dispatch({ type: UPDATE_LISTS, payload: res.data });
		dispatch(setAlert('Movie Added', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.statusText, status: err.response.status },
		});
	}
};

// Add book
export const addBook = (cardObject) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await axios.put('/api/profile/books', cardObject, config);
		dispatch({ type: UPDATE_LISTS, payload: res.data });
		dispatch(setAlert('Book Added', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.statusText, status: err.response.status },
		});
	}
};

// Add videogame
export const addVideoGame = (cardObject) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await axios.put('/api/profile/videogames', cardObject, config);

		dispatch({ type: UPDATE_LISTS, payload: res.data });
		dispatch(setAlert('Game Added', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.statusText, status: err.response.status },
		});
	}
};
