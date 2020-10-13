import React from 'react';
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

	return <button onClick={onClick}>Get Started</button>;
};

ProfileSetup.propTypes = {
	createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(ProfileSetup));
