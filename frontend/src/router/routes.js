import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import App from 'pages/App';
import Character from 'pages/Character';
import CharacterDetail from 'pages/CharacterDetail';
import Error404 from 'pages/Error404';
import {
	HOME_PATH,
    LOGIN_PATH,
    CHARACTERS_PATH,
    CHARACTERS_DETAIL_PATH
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
				<App>
					<Character/>
				</App>
			</PrivateRoute>
			<PrivateRoute path={CHARACTERS_DETAIL_PATH}>
				<App>
					<CharacterDetail/>
				</App>
			</PrivateRoute>
			<Route path="*">
				<Error404/>
			</Route>
		</Switch>
	);
};

export default Routes;
