import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	getMovieResults,
	getBookResults,
	getVideoGameResults,
} from '../../actions/searches';

const SearchBar = ({
	getMovieResults,
	getBookResults,
	getVideoGameResults,
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
		getMovieResults(input);
		switch (category) {
			case 'Movies':
				getMovieResults();
				break;
			case 'Books':
				getBookResults();
				break;
			case 'Video Games':
				getVideoGameResults();
				break;
			default:
				break;
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<select name='category' value={category} onChange={(e) => onChange(e)}>
				<option value='0'>* Select Category </option>
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
				placeholder='search for a movie or tv show'
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

SearchBar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
	getMovieResults,
	getBookResults,
	getVideoGameResults,
})(SearchBar);
