import axios from 'axios';
import { movieApi, bookApi, videoGameApi } from '../config';
import {
	MOVIES_ERROR,
	GAMES_ERROR,
	BOOKS_ERROR,
	SET_MOVIES,
	SET_GAMES,
	SET_BOOKS,
} from './types';

export const getMovieResults = (input) => async (dispatch) => {
	try {
		const moviesRequest = await axios.get(movieApi.endpoint, {
			params: {
				apikey: movieApi.key,
				s: input,
			},
		});

		const movieResult = moviesRequest.data.Search;

		if (movieResult.length) {
			const filteredMovies = movieResult.map((item) => {
				return {
					title: item.Title,
					release: item.Year,
					length: null,
					rating: null,
					url: item.Poster,
					description: null,
					id: item.imdbID,
				};
			});

			dispatch({
				type: SET_MOVIES,
				payload: filteredMovies,
			});
		} else {
			dispatch({
				type: MOVIES_ERROR,
				payload: { message: 'No Results Found' },
			});
		}
	} catch (err) {
		console.log(err.message);
		dispatch({
			type: MOVIES_ERROR,
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
		const gameResults = gameRequest.data.results;

		if (gameResults.length) {
			const filteredGames = gameResults.map((item) => {
				return {
					title: item.name,
					release: item.original_release_date || null,
					length: null,
					rating: null,
					url: item.image.screen_large_url,
					description: item.deck,
					id: item.id,
				};
			});
			dispatch({
				type: SET_GAMES,
				payload: filteredGames,
			});
		} else {
			dispatch({
				type: GAMES_ERROR,
				payload: { message: 'No Results Found' },
			});
		}
	} catch (err) {
		dispatch({
			type: GAMES_ERROR,
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

		const bookResults = bookRequest.data.items;
		if (bookResults.length) {
            const filteredBooks = bookResults.map((item) => {
							return {
								title: item.volumeInfo.title,
								release: item.volumeInfo.publishedDate || null,
								length: item.volumeInfo.pageCount,
								rating: null,
								url: item.volumeInfo.imageLinks.thumbnail,
								description: item.volumeInfo.description,
								id: item.id,
							};
						});
			dispatch({
				type: SET_BOOKS,
				payload: filteredBooks,
			});
		} else {
			dispatch({
				type: BOOKS_ERROR,
				payload: { message: 'No Results Found' },
			});
		}
	} catch (err) {
		console.log(err);
		dispatch({
			type: BOOKS_ERROR,
			payload: err,
		});
	}
};
