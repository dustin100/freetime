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
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
	cat: {
		marginRight: '1rem',
	},
	searchInput: {
		borderRadius: 0,
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
					<Grid className={classes.cat} item sm={2} xs={8}>
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
					<Grid item sm={6} xs={8}>
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
							className={classes.searchInput}
							value={input}
						/>
					</Grid>
					<Grid item sm={1} xs={2}>
						<Button
							className={classes.submit}
							type='submit'
							variant='contained'
							color='primary'
							disabled={!category}>
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
