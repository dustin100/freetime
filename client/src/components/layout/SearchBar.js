import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
	InputLabel,
	Grid,
	MenuItem,
	FormHelperText,
	FormControl,
	Select,
	Button,
	TextField,
	makeStyles,
	Container,
} from '@material-ui/core';

import {
	getMovieResults,
	getBookResults,
	getVideoGameResults,
	clearResults,
} from '../../actions/searches';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(1, 0, 0, 0),
	},
}));

const SearchBar = ({
	getMovieResults,
	getBookResults,
	getVideoGameResults,
	clearResults,
}) => {
	const classes = useStyles();

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
		<Container component='main' maxWidth='xl'>
			<form className={classes.form} onSubmit={onSubmit}>
				<Grid container direction='row' justify='center' alignItems='center'>
					<Grid item xs={3} spacing={0}>
						<FormControl fullWidth>
							<InputLabel id='category'>Category</InputLabel>
							<Select
								labelId='demo-simple-select-helper-label'
								id='demo-simple-select-helper'
								value={category}
								onChange={(e) => onChange(e)}
								name='category'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value='Movies'>Movies</MenuItem>
								<MenuItem value='Books'>Books</MenuItem>
								<MenuItem value='Video Games'>Video Games</MenuItem>
							</Select>
							<FormHelperText>Pick a category</FormHelperText>
						</FormControl>
					</Grid>

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
					<Grid item xs={8} spacing={0}>
						<TextField
							variant='outlined'
							required
							placeholder='Search Something'
							type='search'
							label='search'
							onChange={onChange}
							margin='normal'
							name='input'
							fullWidth
							value={input}
						/>
					</Grid>
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
					<Grid item xs={1} spacing={0}>
						<Button
							className={classes.submit}
							type='submit'
							variant='contained'
							color='primary'
							disabled= {!category}>
							Search
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
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
