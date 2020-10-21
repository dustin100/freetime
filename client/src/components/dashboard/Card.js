import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie, addBook, addVideoGame } from '../../actions/profile';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	btn: {
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		marginBottom: 30,
	},
}));

const Card = ({
	title,
	release,
	length,
	rating,
	url,
	description,
	id,
	content,
	addMovie,
	addBook,
	addVideoGame,
}) => {
	const classes = useStyles();

	const cardData = {
		title,
		release,
		length,
		rating,
		url,
		description,
		id,
		content,
	};

	const onClick = () => {
		if (content === 'movie') {
			addMovie(cardData);
		} else if (content === 'book') {
			addBook(cardData);
		} else if (content === 'game') {
			addVideoGame(cardData);
		} else {
			return;
		}
	};
	return (
		<div className='card'>
			<div className='cardTop'>
				<Typography variant='body2' component='h2'>
					{title}
				</Typography>
			</div>
			<img className='card_image' src={url} alt={title} />

			<Button
				type='submit'
				variant='contained'
				color='primary'
				onClick={onClick}
				className={classes.btn}>
				Add
			</Button>
		</div>
	);
};

Card.propTypes = {
	addBook: PropTypes.func.isRequired,
	addMovie: PropTypes.func.isRequired,
	addVideoGame: PropTypes.func.isRequired,
};

export default connect(null, { addBook, addMovie, addVideoGame })(Card);
