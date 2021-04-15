import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGIN_PATH } from './paths';

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useSelector((state) => state.user);

	const isAuth = !!user;

	const getRoute = (loc) => {
		if (!isAuth) {
			return (
				<Redirect
					to={{
						pathname: LOGIN_PATH,
					}}
				/>
			);
		}

		return children;
	};

	return <Route {...rest} render={({ location }) => getRoute(location)} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
