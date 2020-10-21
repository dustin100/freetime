import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import GetStarted from '../dashboard/Search';
import PrivateRoute from '../routing/PrivateRoute';

import Container from '@material-ui/core/Container';

const Routes = () => {
	return (
		<Container>
			<Alert />
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<PrivateRoute exact path='/profile' component={Dashboard} />
				<PrivateRoute exact path='/search' component={GetStarted} />
				<Route component={NotFound} />
			</Switch>
		</Container>
	);
};

export default Routes;
