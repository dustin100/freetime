import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const ProfileSetup = ({ createProfile, history, name }) => {
	const setupData = {
		name: name,
	};
	const onClick = () => {
		createProfile(setupData, history);
	};

	return (
		<Fragment>
			<h2>How it works</h2>
			<ul>
				<li>Step 1</li>
				<li>Step 2</li>
				<li>Step 3</li>
				<li>Step 4</li>
			</ul>
			<button onClick={onClick}>Get Started</button>
		</Fragment>
	);
};

ProfileSetup.propTypes = {
	createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(ProfileSetup));
