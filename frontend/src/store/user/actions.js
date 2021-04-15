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

import newsroom from 'services/newsroom';
import { getStore } from 'utils/store';

import { USER_UPDATE, ERROR_UPDATE } from './actionNames';

export const login = (values) => async (dispatch) => {
	try {
		const user = await newsroom.userSignin(values);

		if (user.token) {
			getStore().set('user', user);
			getStore().set('isFirstVisit', true);

			dispatch({
				type: USER_UPDATE,
				payload: { user, error: false },
			});
		}
	} catch (_error) {
		dispatch({
			type: USER_UPDATE,
			payload: { user: null, error: true },
		});
	}
};

export const setUser = (user) => (dispatch) => {
	try {
		if (user.token) {
			getStore().set('user', user);

			dispatch({
				type: USER_UPDATE,
				payload: { user, error: false },
			});
		}
	} catch (_error) {
		dispatch({
			type: USER_UPDATE,
			payload: { user: null, error: true },
		});
	}
};

export const updateUser = (data) => async (dispatch) => {
	try {
		await newsroom.updateUser(data);

		const user = getStore().get('user');

		user.name = data.name;
		user.surname = data.surname;

		getStore().set('user', user);
		dispatch({
			type: USER_UPDATE,
			payload: { user, error: false },
		});
	} catch (_error) {
		dispatch({
			type: USER_UPDATE,
			payload: { user: null, error: true, errorCode: _error.request.status },
		});
	}
};

export const logout = () => async (dispatch) => {
	getStore().remove('user');
	dispatch({
		type: USER_UPDATE,
		payload: { user: null, error: false, loggedOut: true },
	});
	window.location.reload();
};

export const updateError = (errorCode) => async (dispatch) => {
	dispatch({
		type: ERROR_UPDATE,
		payload: { error: !!errorCode, errorCode },
	});
};
