import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
	Button,
	TextField,
	Typography,
	Container,
	Avatar,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = ({ login, isAuthenticated }) => {
	const classes = useStyles();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/profile' />;
	}
	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form className={classes.form} onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<TextField
							variant='outlined'
							required
							fullWidth
							placeholder='Enter Your Email'
							type='email'
							label='Email'
							onChange={(e) => onChange(e)}
							defaultValue={email}
							margin='normal'
							name='email'
							autoFocus
						/>
					</div>
					<div className='form-group'>
						<TextField
							variant='outlined'
							required
							fullWidth
							type='password'
							placeholder='Enter Your Password'
							name='password'
							label='Password'
							minLength='6'
							onChange={(e) => onChange(e)}
							value={password}
						/>
					</div>
					<Button
						className={classes.submit}
						type='submit'
						variant='contained'
						color='primary'>
						Login
					</Button>
				</form>
				<p className='my-1'>
					Don't have an account? <Link to='/register'>Sign up</Link>
				</p>
			</div>
		</Container>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
