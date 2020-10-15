import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Redirect } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import ProfileSetup from './ProfileSetup';
import MyList from './MyList';

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
			<h1 className='large text-primary'>Profile</h1>
			<p className='lead'>Welcome {user && user.name}</p>
			{profile !== null ? (
				<Fragment>
					<MyList />
					{/* <Redirect to='/get-started' /> */}
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
