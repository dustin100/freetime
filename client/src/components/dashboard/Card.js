import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie, addBook, addVideoGame } from '../../actions/profile';

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
	const cardData = {
		title,
		release,
		length,
		rating,
		url,
		description,
		id,
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
				<h2>{title}</h2>
				<p className='releaseYear'>{release}</p>
			</div>
			<img className='card_image' src={url} alt={title} />
			<div className='buttonGroup'>
				<button onClick={onClick} className='btn-primary'>
					<i className='fas fa-plus'></i>
				</button>
				<button className='btn-primary'>
					<i className='fas fa-minus'></i>
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	addBook: PropTypes.func.isRequired,
	addMovie: PropTypes.func.isRequired,
	addVideoGame: PropTypes.func.isRequired,
};

export default connect(null, { addBook, addMovie, addVideoGame })(Card);
