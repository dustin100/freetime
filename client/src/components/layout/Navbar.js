import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading, profile } }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/profile'>
					<i className='fas fa-th-list'></i> My List{' '}
				</Link>
				<Link to='/get-started'>
					<i className='fas fa-search'></i> Search{' '}
				</Link>
			</li>
			<li>
				<Link onClick={logout} to='/'>
					Logout
				</Link>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar'>
			<h1>
				<Link to='/'>
					<i className='fas fa-hourglass-half'></i> Free Time
				</Link>
			</h1>
			{!loading && (
				<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
			)}
		</nav>
	);
};
Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Navbar);
