import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HowToRegOutlined } from '@material-ui/icons';
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
	helperText: {
		fontSize: '.7rem',
	},
}));

const Register = ({ setAlert, register, isAuthenticated }) => {
	const classes = useStyles();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/profile' />;
	}

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<HowToRegOutlined />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign Up
				</Typography>

				<form className={classes.form} onSubmit={(e) => onSubmit(e)}>
					<TextField
						variant='outlined'
						required
						fullWidth
						placeholder='Your Name'
						type='name'
						label='Name'
						onChange={(e) => onChange(e)}
						margin='normal'
						name='name'
						value={name}
					/>

					<TextField
						variant='outlined'
						required
						fullWidth
						placeholder='Enter Your Email'
						type='email'
						label='Email'
						onChange={(e) => onChange(e)}
						value={email}
						margin='normal'
						name='email'
					/>
					<Typography
						className={classes.helperText}
						component='p'
						variant='body2'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</Typography>

					<TextField
						variant='outlined'
						required
						fullWidth
						type='password'
						placeholder='Set Your Password'
						name='password'
						label='Password'
						minLength='6'
						margin='normal'
						onChange={(e) => onChange(e)}
						value={password}
					/>

					<TextField
						variant='outlined'
						required
						fullWidth
						type='password'
						placeholder='Confirm Password'
						name='password2'
						label='Confirm Password'
						minLength='6'
						margin='normal'
						onChange={(e) => onChange(e)}
						value={password2}
					/>

					<Button
						className={classes.submit}
						type='submit'
						variant='contained'
						color='primary'>
						Register
					</Button>
				</form>
				<p className='my-1'>
					Already have an account? <a href='login'>Sign In</a>
				</p>
			</div>
		</Container>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
