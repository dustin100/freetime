import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Card from './Card';

const Cards = ({ results, loading }) => {
	const cards = results.map(
		({ title, release, length, rating, url, description, id }) => {
			return (
				<Card
					key={id}
					title={title}
					release={release}
					length={length}
					rating={rating}
					url={url}
					description={description}
					id={id}
				/>
			);
		}
	);

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<div className='cards'>{cards}</div>
		</Fragment>
	);
};

Cards.propTypes = {
	results: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
	results: state.searches.results,
	loading: state.searches.loading,
});
export default connect(mapStateToProps)(Cards);
