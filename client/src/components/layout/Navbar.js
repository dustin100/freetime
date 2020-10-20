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
	Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import UpdateIcon from '@material-ui/icons/Update';

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
		marginRight: theme.spacing(1),
		'&:hover': {
			backgroundColor: 'transparent',
			textDecoration: 'underline',
		},
	},
	logo: {
		display: 'flex',
	},
	logoText: {
		marginLeft: 8,
	},
}));

const Navbar = ({ logout, auth: { isAuthenticated, loading, profile } }) => {
	const classes = useStyles();
	const authLinks = (
		<Fragment>
			<Button
				className={classes.navLinks}
				component={RouterLink}
				to='/profile'
				color='inherit'
				startIcon={<FormatListBulletedIcon color='secondary' />}>
				My List
			</Button>
			<Button
				className={classes.navLinks}
				component={RouterLink}
				to='/search'
				color='inherit'
				startIcon={<SearchIcon color='secondary' />}>
				Search
			</Button>

			<Button
				color='inherit'
				className={classes.navLinks}
				component={RouterLink}
				onClick={logout}
				to='/'>
				Logout
			</Button>
		</Fragment>
	);

	const guestLinks = (
		<Typography className={classes.root}>
			<Button
				className={classes.navLinks}
				component={RouterLink}
				to='/register'
				color='inherit'>
				Register
			</Button>

			<Button
				className={classes.navLinks}
				component={RouterLink}
				to='/login'
				color='inherit'>
				Login
			</Button>
		</Typography>
	);

	return (
		<Fragment>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' className={classes.title}>
						<Link component={RouterLink} color='inherit' to='/'>
							<div className={classes.logo}>
								<UpdateIcon color='secondary' fontSize='large' />{' '}
								<div className={classes.logoText}>Free Time</div>
							</div>
						</Link>
					</Typography>
					{!loading && (
						<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
					)}
				</Toolbar>
			</AppBar>
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
