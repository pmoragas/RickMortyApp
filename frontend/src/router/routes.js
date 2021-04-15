/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from 'pages/App';
import Login from 'pages/App';
import {
	HOME_PATH,
    LOGIN_PATH,
    CHARACTERS_PATH
} from './paths';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from={HOME_PATH} to={LOGIN_PATH} />
			<Route exact path={LOGIN_PATH}>
				<Login />
			</Route>
			<PrivateRoute exact path={CHARACTERS_PATH}>
				<App />
			</PrivateRoute>
			<Route path="*">
				(<div>404</div>)
			</Route>
		</Switch>
	);
};

export default Routes;
