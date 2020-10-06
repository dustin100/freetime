import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../layout/SearchBar';

const GetStarted = (props) => {
	return (
		<Fragment>
            <SearchBar />
			<h1 className='large text-primary'>Start Here</h1>
			<p className='lead'>Let's get started!</p>
			<div className='button-group'>
				<button className='btn btn-primary'>Add Movies</button>
				<button className='btn btn-primary'>Add Video Games</button>
				<button className='btn btn-primary'>Add Books</button>
			</div>
		</Fragment>
	);
};

GetStarted.propTypes = {};

export default GetStarted;
