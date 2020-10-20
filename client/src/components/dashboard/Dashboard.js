import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import ProfileSetup from './ProfileSetup';
import MyList from './MyList';
import { Typography } from '@material-ui/core';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<Typography
				color='primary'
				component='h2'
				variant='h2'
				className='name-header'>
				{user && user.name}'s List
			</Typography>
			{profile !== null ? (
				<Fragment>
					<MyList />
				</Fragment>
			) : (
				<Fragment>
					<ProfileSetup name={user && user.name} />
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
