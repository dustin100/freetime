import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListRows from './ListRows';
import { deleteGame, deleteBook, deleteMovie } from '../../actions/profile';

const MyList = ({
	profile: {
		profile: { movies, books, videogames },
	},
	deleteBook,
	deleteGame,
	deleteMovie,
}) => {
	const onMovieClick = (id) => {
		deleteMovie(id);
	};

	const onGameClick = (id) => {
		deleteGame(id);
	};

	const onBookClick = (id) => {
		deleteBook(id);
	};

	return (
		<Fragment>
			<ListRows list={movies} title='Movies' clicked={onMovieClick} />
			<ListRows list={books} title='Books' clicked={onBookClick} />
			<ListRows list={videogames} title='Games' clicked={onGameClick} />
		</Fragment>
	);
};

MyList.propTypes = {};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, {
	deleteBook,
	deleteGame,
	deleteMovie,
})(MyList);
