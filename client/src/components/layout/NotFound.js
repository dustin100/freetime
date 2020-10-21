import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const NotFound = () => {
	return (
		<Fragment>
			<Typography align='center' variant='h2' component='h2'>
				Page Not Found
			</Typography>
			<Typography align='center' variant='body' component='p'>
				Sorry this page does not exist
			</Typography>
		</Fragment>
	);
};

export default NotFound;
