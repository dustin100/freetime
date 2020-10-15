import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListRows from './ListRows';
import { Link } from 'react-router-dom';
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

	const isEmpty =
		movies.length <= 0 && books.length <= 0 && videogames.length <= 0;
	console.log(isEmpty);

	return isEmpty ? (
		<Fragment>
			<p>Your List is Empty</p>
			<Link to='/get-started'>
				<button className='btn btn-primary'>Start Searching</button>
			</Link>
		</Fragment>
	) : (
		<Fragment>
			<ListRows list={movies} title='Movies' clicked={onMovieClick} />
			<ListRows list={books} title='Books' clicked={onBookClick} />
			<ListRows list={videogames} title='Games' clicked={onGameClick} />
		</Fragment>
	);
};

MyList.propTypes = {
	profile: PropTypes.object.isRequired,
	deleteBook: PropTypes.func.isRequired,
	deleteGame: PropTypes.func.isRequired,
	deleteMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, {
	deleteBook,
	deleteGame,
	deleteMovie,
})(MyList);
