import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {
	Typography,
	makeStyles,
	Toolbar,
	AppBar,
	Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: theme.spacing(2),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	titleColor: {
		color: '#fff',
	},
	navLinks: {
		marginRight: theme.spacing(2),
	},
}));

const Navbar = ({ logout, auth: { isAuthenticated, loading, profile } }) => {
	const classes = useStyles();
	const authLinks = (
		<Typography className={classes.root}>
			<Link
				className={classes.navLinks}
				component={RouterLink}
				to='/profile'
				color='inherit'>
				<i className='fas fa-th-list'></i> My List{' '}
			</Link>
			<Link
				className={classes.navLinks}
				component={RouterLink}
				to='/search'
				color='inherit'>
				<i className='fas fa-search'></i> Search{' '}
			</Link>

			<Link
				color='inherit'
				className={classes.navLinks}
				component={RouterLink}
				onClick={logout}
				to='/'>
				Logout
			</Link>
		</Typography>
	);

	const guestLinks = (
		<Typography className={classes.root}>
			<Link
				className={classes.navLinks}
				component={RouterLink}
				to='/register'
				color='inherit'>
				Register
			</Link>

			<Link component={RouterLink} to='/login' color='inherit'>
				Login
			</Link>
		</Typography>
	);

	return (
		<Fragment>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' className={classes.title}>
						<Link component={RouterLink} color='inherit' to='/'>
							<i className='fas fa-hourglass-half'></i> Free Time
						</Link>
					</Typography>
					{!loading && (
						<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
					)}
				</Toolbar>
			</AppBar>

			{/* <nav className='navbar'>
				<h1>
					<Link to='/'>
						<i className='fas fa-hourglass-half'></i> Free Time
					</Link>
				</h1>
				{!loading && (
					<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
				)}
			</nav> */}
		</Fragment>
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
