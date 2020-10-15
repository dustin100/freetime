import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../layout/SearchBar';
import Cards from './Cards';
import { loadComponent } from '../../actions/searches';

const GetStarted = ({ results, loading, loadComponent }) => {
	useEffect(() => {
		loadComponent();
	}, [loadComponent]);
	return (
		<Fragment>
			<SearchBar />
			{!results.length && !loading ? (
				<p>
					Start by Searching for movies, books, or video games and add them to
					your list
				</p>
			) : (
				<Cards />
			)}
		</Fragment>
	);
};

GetStarted.propTypes = {
	results: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	results: state.searches.results,
	loading: state.searches.loading,
});
export default connect(mapStateToProps, { loadComponent })(GetStarted);
