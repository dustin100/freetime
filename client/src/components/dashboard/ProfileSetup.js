import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { withRouter } from 'react-router-dom';
import {
	Button,
	List,
	ListItem,
	Typography,
	makeStyles,
} from '@material-ui/core';

// icons
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
		width: '70%',
	},

	btn: {
		margin: theme.spacing(3, 0, 2),
	},
	icon: {
		marginRight: 8,
	},
}));

const ProfileSetup = ({ createProfile, history, name }) => {
	const classes = useStyles();
	const setupData = {
		name: name,
	};
	const onClick = () => {
		createProfile(setupData, history);
		history.push('/search');
	};

	return (
		<div className={classes.root}>
			<Typography component='h2' variant='h4'>
				How it works
			</Typography>
			<List>
				<ListItem>
					<SearchIcon className={classes.icon} color='secondary' />
					Search for a movie, book, or video game
				</ListItem>
				<ListItem>
					<AddCircleOutlineIcon className={classes.icon} color='secondary' />
					Add everything you want to read, watch, and play to your list
				</ListItem>
				<ListItem>
					<FormatListBulletedIcon className={classes.icon} color='secondary' />
					Checkout your list
				</ListItem>
				<ListItem>
					<DeleteIcon className={classes.icon} color='secondary' /> After
					reading, watching, or playing, remove item from your list
				</ListItem>
				<ListItem>
					
					<UpdateIcon className={classes.icon} color='secondary' />
					Coming soon: calculation of the amount of time it will take you to
					finish everything on your list
				</ListItem>
				<ListItem>
					<EmojiEmotionsIcon className={classes.icon} color='secondary' />
					Enjoy!
				</ListItem>
			</List>
			<Button
				onClick={onClick}
				className={classes.btn}
				variant='contained'
				color='primary'>
				Get Started
			</Button>
		</div>
	);
};

ProfileSetup.propTypes = {
	createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(ProfileSetup));
