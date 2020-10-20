import React from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: theme.spacing(2),
	},

	buttons: {
		display: 'flex',
		
	},

	btn: {
		margin: theme.spacing(2, 2, 2),
	},
}));

const Landing = ({ isAuthenticated }) => {
	const classes = useStyles();

	if (isAuthenticated) {
		return <Redirect to='/profile' />;
	}
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<Typography align='center' variant='h1' component='h1'>
						Free Time
					</Typography>
					{/* <h1 className='x-large'>Free Time</h1> */}
					<Typography align='center' variant='h6' component='p'>
						Setup a profile to keep track of all the things you want to do in
						your free time
					</Typography>
					<div className={classes.buttons}>
						<Button
							className={classes.btn}
							color='primary'
							component={RouterLink}
							to='/register'
							variant='contained'
							color='primary'>
							Sign Up
						</Button>
						<Button
							className={classes.btn}
							component={RouterLink}
							to='/login'
							variant='contained'
							color='secondary'>
							Login
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
