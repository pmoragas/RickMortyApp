import { USER_UPDATE, ERROR_UPDATE } from './actionNames';
import RickMortyApi from 'services/rickMortyApi';

export const login = (values) => async (dispatch) => {
	try {
		const user = await RickMortyApi.userSignin(values);

		if (user.token) {
			localStorage.setItem('user', JSON.stringify(user));

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
			localStorage.setItem('user', JSON.stringify(user));

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
		//await newsroom.updateUser(data);

		const user = JSON.parse(localStorage.getItem('user'));

		user.name = data.name;
		user.surname = data.surname;

		localStorage.setItem('user', JSON.stringify(user));
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
	localStorage.removeItem('user');
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
