import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
		<form className='searchBar' onSubmit={onSubmit}>
			<FormControl className='selectBox'>
				<InputLabel id='category'>Category</InputLabel>
				<Select
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
					value={category}
					onChange={(e) => onChange(e)}
					name='category'
					autoFocus>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value='Movies'>Movies</MenuItem>
					<MenuItem value='Books'>Books</MenuItem>
					<MenuItem value='Video Games'>Video Games</MenuItem>
				</Select>
				<FormHelperText>Pick a category</FormHelperText>
			</FormControl>

			{/* <select name='category' value={category} onChange={(e) => onChange(e)}>
				<option value='default' hidden>
					* Select Category{' '}
				</option>
				<option value='Movies'>Movies</option>
				<option value='Books'>Books</option>
				<option value='Video Games'>Video Games</option>
			</select> */}

			{/* <label className='visuallyHidden' htmlFor='site-search'>
				Search the site:
			</label> */}
			<TextField
				className='searchTextField'
				variant='outlined'
				required
				placeholder='Search Something'
				type='search'
				label='search'
				onChange={onChange}
				margin='normal'
				name='input'
				value={input}
			/>
			{/* <input
				type='search'
				id='site-search'
				name='input'
				required
				placeholder='search for something'
				aria-label='Search through site content'
				value={input}
				onChange={onChange}
			/> */}

			<Button
				className='searchButton'
				type='submit'
				variant='contained'
				color='primary'>
				Search
			</Button>
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
