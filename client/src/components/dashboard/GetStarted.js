import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../layout/SearchBar';
import Cards from './Cards';

const GetStarted = ({ results }) => {
	return (
		<Fragment>
			<SearchBar />
			{results.length ? (
				<Cards />
			) : (
				<p>
					Start by Searching for movies, books, or video games and add them to
					your list
				</p>
			)}
		</Fragment>
	);
};

GetStarted.propTypes = {};

const mapStateToProps = (state) => ({
	results: state.searches.results,
	loading: state.searches.loading,
});
export default connect(mapStateToProps)(GetStarted);
