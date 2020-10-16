import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	getMovieResults,
	getBookResults,
	getVideoGameResults,
	clearResults,
} from '../../actions/searches';

const SearchBar = ({
	getMovieResults,
	getBookResults,
	getVideoGameResults,
	clearResults,
}) => {
	const [formData, setFormData] = useState({
		input: '',
		category: '',
	});

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const { input, category } = formData;

	const onSubmit = (e) => {
		e.preventDefault();
		clearResults();
		switch (category) {
			case 'Movies':
				getMovieResults(input);
				break;
			case 'Books':
				getBookResults(input);
				break;
			case 'Video Games':
				getVideoGameResults(input);
				break;
			default:
				break;
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<select name='category' value={category} onChange={(e) => onChange(e)}>
				<option value='default'>* Select Category </option>
				<option value='Movies'>Movies</option>
				<option value='Books'>Books</option>
				<option value='Video Games'>Video Games</option>
			</select>

			<label className='visuallyHidden' htmlFor='site-search'>
				Search the site:
			</label>
			<input
				className='searchSite'
				type='search'
				id='site-search'
				name='input'
				required
				placeholder='search for something'
				aria-label='Search through site content'
				value={input}
				onChange={onChange}
			/>

			<button className='btn btn-primary' type='submit'>
				Search
			</button>
		</form>
	);
};

SearchBar.propTypes = {
	getBookResults: PropTypes.func.isRequired,
	getMovieResults: PropTypes.func.isRequired,
	getVideoGameResults: PropTypes.func.isRequired,
	clearResults: PropTypes.func.isRequired,
};

export default connect(null, {
	getMovieResults,
	getBookResults,
	getVideoGameResults,
	clearResults,
})(SearchBar);
